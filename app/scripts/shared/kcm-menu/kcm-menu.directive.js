(function() {
    'use strict';

    angular
        .module('kcmDashboardApp.kcm-menu')
        .directive('kcmMenu', kcmMenu);

    function kcmMenu() {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared/kcm-menu/kcm-menu.directive.html'
        };
    }
})();
