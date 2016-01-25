(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name kcmDashboardApp.controller:DashboardCtrl
     * @description
     * # DashboardCtrl
     * Controller of the kcmDashboardApp
     */
    angular.module('kcmDashboardApp')
        .controller('DashboardCtrl', DashboardCtrl);

    // @ngInject
    function DashboardCtrl($scope, employeesFactory, $translate) {
        var controller = this;

        //Populate employees collection
        controller.employees = [];
        employeesFactory.getAll().then(
            function(employeesCollection) {
                controller.employees = employeesCollection;
            },
            function(response) {
                //@todo: Implement Error handling
                controller.employees = employeesFactory.getAllStatic();
            }
        ).finally(processEmployees);

        controller.datepicker = {
            'format': 'dd-MMMM-yyyy',
            'sales': {
                'startDate': {
                    'model': new Date(),
                    'isOpen': false,
                    'open': function() {
                        controller.datepicker.sales.startDate.isOpen = true;
                    }
                },
                'endDate': {
                    'model': new Date(),
                    'isOpen': false,
                    'open': function() {
                        controller.datepicker.sales.endDate.isOpen = true;
                    }
                },
                'maxDate': new Date(2016, 5, 22),
                'minDate': new Date(2010, 5, 22),
            },
            'service': {
                'startDate': {
                    'model': new Date(),
                    'isOpen': false,
                    'open': function() {
                        controller.datepicker.service.startDate.isOpen = true;
                    }
                },
                'endDate': {
                    'model': new Date(),
                    'isOpen': false,
                    'open': function() {
                        controller.datepicker.service.endDate.isOpen = true;
                    }
                },
                'maxDate': new Date(2016, 5, 22),
                'minDate': new Date(2010, 5, 22),
            },
            'disabled': function(date, mode) {
               return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }
        };

        function processEmployees(employeesCollection) {
            controller.salesEmployees = _.filter(controller.employees, function(employee) {
                return employee.typeSales;
            });
            controller.serviceEmployees = _.filter(controller.employees, function(employee) {
                return employee.typeService;
            });

            controller.selectedSalesEmployees = [];
            controller.selectedServiceEmployees = [];
            //Charts logic
            controller.charts = {
                'sales': {
                    'series': [],
                    'data': [[0]],
                    'labels': [],
                    'onClick': function (points, evt) {
                        console.log(points, evt);
                    }
                },
                'engineer': {
                    'series': [],
                    'data': [[0]],
                    'labels': [],
                    'onClick': function (points, evt) {
                        console.log(points, evt);
                    }
                }
            };

            $translate('dashboard.charts.noEmployeeSelected').then(function (translation) {
                controller.charts.sales.series = [translation];
                controller.charts.engineer.series = [translation];
            });
        }

        controller.updateChart = function(chart, employee, checked) {
            //When no employee is selected, use default values
            if (controller.selectedSalesEmployees.length === 0) {
                chart.labels = [''];
                $translate('dashboard.charts.noEmployeeSelected').then(function (translation) {
                    chart.series = [translation];
                });
                chart.data = [[0]];

            //Re-calculate chart values from selcted employees collections.
            } else {
                var newSeries = [],
                    newData = [],
                    salesPeriods = [];

                var employeeSalesDates = [],
                    employeesSales = [],
                    minDate,
                    maxDate;

                angular.forEach(controller.selectedSalesEmployees, function(employee, key) {

                    var salesPerMonth = [];

                    // var salesAmounts = [],
                    //     salesPerMonth = [];
                    //newSeries.push(employee.name.last + ', ' + employee.name.first);


                    angular.forEach(employee.sales, function(sale, key) {
                        var saleDate = new Date(sale.date);
                        employeeSalesDates.push(saleDate);

                        if (typeof sale.revenue !== 'number') {
                            sale.revenue = parseFloat(sale.revenue.replace(/\$|,|/g, ''));
                        }

                        if (salesPerMonth[saleDate.getFullYear()]) {
                            if (salesPerMonth[saleDate.getFullYear()][saleDate.getMonth()]) {
                                salesPerMonth[saleDate.getFullYear()][saleDate.getMonth()] += sale.revenue;
                            } else {
                                salesPerMonth[saleDate.getFullYear()][saleDate.getMonth()] = sale.revenue;
                            }
                        } else {
                            salesPerMonth[saleDate.getFullYear()] = [];
                            salesPerMonth[saleDate.getFullYear()][saleDate.getMonth()] = sale.revenue;
                        }

                        // var saleDate = new Date(sale.date),
                        //     saleYearMonth = saleDate.getFullYear().toString() + saleDate.getMonth().toString();

                        // if (salesPerMonth[saleYearMonth]) {
                        //     salesPerMonth[saleYearMonth] = salesPerMonth[saleYearMonth] + sale.revenue;
                        // } else {
                        //     salesPerMonth[saleYearMonth] = sale.revenue;

                        //     salesPeriods[saleYearMonth] = {
                        //         'month': saleDate.getMonth(),
                        //         'year': saleDate.getFullYear()
                        //     };
                        // }
                    });
                    // newData.push(salesPerMonth);

                    employeesSales.push(salesPerMonth);
                });


                minDate = getMinDate(employeeSalesDates);
                maxDate = getMaxDate(employeeSalesDates);
                // chart.series = getUpdatedSeries();
                chart.labels = getUpdatedLabels(minDate, maxDate);
                chart.data = getUpdatedData(employeesSales, minDate, maxDate);
            }
        };

        function getUpdatedSeries() {

        }
        function getUpdatedData(employeesSales, minDate, maxDate) {
            var totalMonths = monthDiff(minDate, maxDate),
                chartData = [];

            employeesSales.forEach(function(employeeSales, employeeKey) {
                var salesAmounts = [],
                    minDateAux = new Date(minDate);

                for (var month = 0; month < totalMonths; month++) {

                    if (employeeSales[minDateAux.getFullYear()] == null) {
                        employeeSales[minDateAux.getFullYear()] = [];
                        employeeSales[minDateAux.getFullYear()][minDateAux.getMonth()] = 0;
                    } else {
                        if (employeeSales[minDateAux.getFullYear()][minDateAux.getMonth()] == null) {
                            employeeSales[minDateAux.getFullYear()][minDateAux.getMonth()] = 0;
                        }
                    }

                    salesAmounts.push(employeeSales[minDateAux.getFullYear()][minDateAux.getMonth()]);
                    minDateAux.setMonth(minDateAux.getMonth() + 1);
                }
                chartData.push(salesAmounts);
            });

            return chartData;
        }
        function getUpdatedLabels(minDate, maxDate) {
            var labels = [],
                month = minDate.getMonth();

                for (var year = minDate.getFullYear(); year <= maxDate.getFullYear(); year++) {
                    for (;
                        month <= 11 && (year < maxDate.getFullYear() || month <= maxDate.getMonth());
                        month++) {

                        $translate('dashboard.charts.months.' + month, {year: year}).then(function (translation) {
                            labels.push(translation);
                        });
                    }

                    //Reset month variable to start counting new year
                    month = 0;
                }
            return labels;
        }
        function getMinDate(datesCollection) {
            var minDate = Math.min.apply(null, datesCollection);
            // convert back to date object
            return new Date(minDate);
        }
        function getMaxDate(datesCollection) {
            var maxDate = Math.max.apply(null, datesCollection);
            // convert back to date object
            return new Date(maxDate);
        }
        function monthDiff(date1, date2) {
            var months = 1;
            months += (date2.getFullYear() - date1.getFullYear()) * 12;
            // months -= date1.getMonth() + 1;
            months += date2.getMonth() - date1.getMonth();
            return months <= 0 ? 0 : months;
        }
    }
})();
