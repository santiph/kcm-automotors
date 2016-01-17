(function() {
    'use strict';

    /**
    * @ngdoc overview
    * @name kcmDashboardApp
    * @description
    * # kcmDashboardApp
    *
    * Main module of the application.
    */
    angular
        .module('kcmDashboardApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ui.router',
            'ngSanitize',
            'ngTouch',
            'pascalprecht.translate'
            ])
        .config(configuration);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

    function configuration($stateProvider, $urlRouterProvider, $translateProvider) {

        configureRouter();
        configureTranslate();

        //@todo: SOC - Store routing configurations into separate files
        function configureRouter() {

            // For any unmatched url, redirect to /
            $urlRouterProvider.otherwise('/about');
            // Now set up the states
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardCtrl',
                    controllerAs: 'dashboardVm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'aboutVm'
                })
                .state('finance', {
                    url: '/finance',
                    templateUrl: 'views/finance.html',
                    controller: 'FinanceCtrl',
                    controllerAs: 'financeVm'
                })
                .state('human-resources', {
                    url: '/human-resources',
                    templateUrl: 'views/human-resources.html',
                    controller: 'HumanResourcesCtrl',
                    controllerAs: 'humanResourcesVm'
                })
                .state('reporting', {
                    url: '/reporting',
                    templateUrl: 'views/reporting.html',
                    controller: 'ReportingCtrl',
                    controllerAs: 'reportingVm'
                })
                .state('support', {
                    url: '/support',
                    templateUrl: 'views/support.html',
                    controller: 'SupportCtrl',
                    controllerAs: 'supportVm'
                });
        }

        //@todo: SOC - Store translation keys into separate files
        function configureTranslate() {
            $translateProvider.translations('en', {
                'dashboard': {
                    'options': {
                        'dashboard': 'Dashboard',
                        'finance': 'Finance',
                        'reporting': 'Reporting',
                        'humanResources': 'Human Resources',
                        'support': 'Support'
                    }
                },
                'header': {
                    'search': {
                        'placeholder': 'Search...',
                        'button': 'Go!'
                    }
                },
                'footer': {
                    'copyright': 'KCM Automotors - 2016'
                }
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('escaped');
        }
    }
})();