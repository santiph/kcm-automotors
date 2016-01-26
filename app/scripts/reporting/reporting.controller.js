(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name kcmDashboardApp.controller:ReportingCtrl
     * @description
     * # ReportingCtrl
     * Controller of the kcmDashboardApp
     */
    angular.module('kcmDashboardApp')
        .controller('ReportingCtrl', ReportingCtrl);

    // @ngInject
    function ReportingCtrl($scope, employeesFactory, $translate) {
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

            $translate('reports.charts.noEmployeeSelected').then(function (translation) {
                controller.charts.sales.series = [translation];
                controller.charts.engineer.series = [translation];
            });
        }

        controller.updateChart = function(chart, employee, checked) {
            // Is employee a Sales Consultant?
            if (employee.typeSales) {

                //When no employee is selected, use default values
                if (controller.selectedSalesEmployees.length === 0) {
                    chart.labels = [''];
                    $translate('reports.charts.noEmployeeSelected').then(function (translation) {
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
                        maxDate,
                        selectedEmployeesNames = [];

                    angular.forEach(controller.selectedSalesEmployees, function(employee, key) {

                        var salesPerMonth = [];

                        $translate(
                            'reports.charts.employeeNameSerie',
                            {last: employee.name.last, first: employee.name.first}
                        ).then(function (translation) {
                            selectedEmployeesNames.push(translation);
                        });

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
                        });
                        employeesSales.push(salesPerMonth);
                    });


                    minDate = getMinDate(employeeSalesDates);
                    maxDate = getMaxDate(employeeSalesDates);
                    chart.series = selectedEmployeesNames;
                    chart.labels = getUpdatedLabels(minDate, maxDate);
                    chart.data = getUpdatedDataForSales(employeesSales, minDate, maxDate);
                }

            // Is employee a Service Engineer?
            } else {

                //When no employee is selected, use default values
                if (controller.selectedServiceEmployees.length === 0) {
                    chart.labels = [''];
                    $translate('reports.charts.noEmployeeSelected').then(function (translation) {
                        chart.series = [translation];
                    });
                    chart.data = [[0]];

                //Re-calculate chart values from selcted employees collections.
                } else {
                    var employeeRepairsDates = [],
                        employeesRepairs = [],
                        minDate,
                        maxDate,
                        selectedEmployeesNames = [];

                    angular.forEach(controller.selectedServiceEmployees, function(employee, key) {

                        var salesPerMonth = [];

                        $translate(
                            'reports.charts.employeeNameSerie',
                            {last: employee.name.last, first: employee.name.first}
                        ).then(function (translation) {
                            selectedEmployeesNames.push(translation);
                        });

                        angular.forEach(employee.repairs, function(repair, key) {
                            var repairDate = new Date(repair.date);
                            employeeRepairsDates.push(repairDate);

                            if (salesPerMonth[repairDate.getFullYear()]) {
                                if (salesPerMonth[repairDate.getFullYear()][repairDate.getMonth()]) {
                                    salesPerMonth[repairDate.getFullYear()][repairDate.getMonth()] += repair.cars;
                                } else {
                                    salesPerMonth[repairDate.getFullYear()][repairDate.getMonth()] = repair.cars;
                                }
                            } else {
                                salesPerMonth[repairDate.getFullYear()] = [];
                                salesPerMonth[repairDate.getFullYear()][repairDate.getMonth()] = repair.cars;
                            }
                        });
                        employeesRepairs.push(salesPerMonth);
                    });


                    minDate = getMinDate(employeeRepairsDates);
                    maxDate = getMaxDate(employeeRepairsDates);
                    chart.series = selectedEmployeesNames;
                    chart.labels = getUpdatedLabels(minDate, maxDate);
                    chart.data = getUpdatedDataForService(employeesRepairs, minDate, maxDate);
                }
            }
        };

        function getUpdatedDataForService(employeesRepairs, minDate, maxDate) {
            var totalMonths = monthDiff(minDate, maxDate),
                chartData = [];

            employeesRepairs.forEach(function(employeeRepairs, employeeKey) {
                var repairsCount = [],
                    minDateAux = new Date(minDate);

                for (var month = 0; month < totalMonths; month++) {

                    if (employeeRepairs[minDateAux.getFullYear()] == null) {
                        employeeRepairs[minDateAux.getFullYear()] = [];
                        employeeRepairs[minDateAux.getFullYear()][minDateAux.getMonth()] = 0;
                    } else {
                        if (employeeRepairs[minDateAux.getFullYear()][minDateAux.getMonth()] == null) {
                            employeeRepairs[minDateAux.getFullYear()][minDateAux.getMonth()] = 0;
                        }
                    }

                    repairsCount.push(employeeRepairs[minDateAux.getFullYear()][minDateAux.getMonth()]);
                    minDateAux.setMonth(minDateAux.getMonth() + 1);
                }
                chartData.push(repairsCount);
            });

            return chartData;
        }

        function getUpdatedDataForSales(employeesSales, minDate, maxDate) {
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

                        $translate('reports.charts.months.' + month, {year: year}).then(function (translation) {
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
