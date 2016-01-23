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
    function DashboardCtrl($scope, employeesFactory) {
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
                    'series': [
                        controller.employees[0].name.first + ' ' + controller.employees[0].name.last, 'Series B'
                    ],
                    'data': [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ],
                    'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    'onClick': function (points, evt) {
                        console.log(points, evt);
                    }
                },
                'engineer': {
                    'series': ['Series A', 'Series B'],
                    'data': [
                        [28, 48, 40, 19, 86, 27, 90],
                        [65, 59, 80, 81, 56, 55, 40]
                    ],
                    'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    'onClick': function (points, evt) {
                        console.log(points, evt);
                    }
                }
            };
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