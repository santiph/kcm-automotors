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

        controller.employees = [];

        employeesFactory.getAll().then(
            function(employeesCollection) {
                controller.employees = employeesCollection;
            },
            function(response) {
                controller.employees = employeesFactory.getAllStatic();
            }
        );

        controller.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    }
})();
