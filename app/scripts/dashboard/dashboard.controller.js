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
                controller.employees = employeesFactory.getAllStatic();
            }
        ).finally(function(employeesCollection) {


            controller.selectedEmployees = [];
            //Charts logic
            controller.charts = {
                'sales': {
                    'series': [controller.employees[0].name.first + ' ' + controller.employees[0].name.last, 'Series B'],
                    'data': [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ],
                    'labels': ["January", "February", "March", "April", "May", "June", "July"],
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
                    'labels': ["January", "February", "March", "April", "May", "June", "July"],
                    'onClick': function (points, evt) {
                        console.log(points, evt);
                    }
                }
            };
        });
    }
})();