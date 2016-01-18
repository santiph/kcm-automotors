(function() {
    'use strict';

    angular
        .module('kcmDashboardApp.kcm-footer')
        .directive('kcmFooter', kcmFooter);

    function kcmFooter () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared/kcm-footer/kcm-footer.directive.html'
        };
    }
})();
