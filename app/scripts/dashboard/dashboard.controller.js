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

        controller.updateChart = function(chart, employee, checked) {
            if (controller.selectedSalesEmployees.length === 0) {
                chart.labels = [];
                $translate('dashboard.charts.noEmployeeSelected').then(function (translation) {
                    chart.series = [translation];
                });
                chart.data = [[0]];
            } else {
                var newSeries = [],
                    newData = [];
                angular.forEach(controller.selectedSalesEmployees, function(employee, key) {
                    newSeries.push(employee.name.last + ', ' + employee.name.first);
                    newData.push([65, 59, 80, 81, 56, 55, 40]);
                });
                chart.series = newSeries;
                chart.data = newData;
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
    }
})();