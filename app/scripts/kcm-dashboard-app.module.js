(function(_) {
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
            'pascalprecht.translate',
            'kcmDashboardApp.kcm-header',
            'kcmDashboardApp.kcm-footer',
            'kcmDashboardApp.kcm-menu',
            'kcmDashboardApp.services.employees',
            'chart.js',
            'checklist-model',
            'ui.bootstrap',
            'angular-loading-bar'
        ])
        .config(configuration)
        // lodash support
        .constant('_', _);

    configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$translateProvider'];

    function configuration($stateProvider, $urlRouterProvider, $translateProvider) {

        configureRouter();
        configureTranslate();

        //@todo: SOC - Store routing configurations into separate files
        function configureRouter() {

            // For any unmatched url, redirect to /
            $urlRouterProvider.otherwise('/dashboard');
            // Now set up the states
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'scripts/dashboard/dashboard.html',
                    controller: 'DashboardCtrl',
                    controllerAs: 'dashboardVm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'scripts/about/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'aboutVm'
                })
                .state('finance', {
                    url: '/finance',
                    templateUrl: 'scripts/finance/finance.html',
                    controller: 'FinanceCtrl',
                    controllerAs: 'financeVm'
                })
                .state('human-resources', {
                    url: '/human-resources',
                    templateUrl: 'scripts/human-resources/human-resources.html',
                    controller: 'HumanResourcesCtrl',
                    controllerAs: 'humanResourcesVm'
                })
                .state('reporting', {
                    url: '/reporting',
                    templateUrl: 'scripts/reporting/reporting.html',
                    controller: 'ReportingCtrl',
                    controllerAs: 'reportingVm'
                })
                .state('support', {
                    url: '/support',
                    templateUrl: 'scripts/support/support.html',
                    controller: 'SupportCtrl',
                    controllerAs: 'supportVm'
                });
        }

        //@todo: SOC - Store translation keys into separate files
        function configureTranslate() {
            $translateProvider.translations('en', {
                'reports': {
                    'salesReport': {
                        'title': 'Sales Consultants Report',
                        'list': 'Sales Consultants'
                    },
                    'serviceReport': {
                        'title': 'Service Engineers Report',
                        'list': 'Service Engineers'
                    },
                    'charts': {
                        'startDate': 'Start Date',
                        'endDate': 'End Date',
                        'noEmployeeSelected': 'Please, select an employee',
                        'employeeNameSerie': '{{::last}}, {{::first}}',
                        'months': {
                            '0': 'January {{year}}',
                            '1': 'February {{year}}',
                            '2': 'March {{year}}',
                            '3': 'April {{year}}',
                            '4': 'May {{year}}',
                            '5': 'June {{year}}',
                            '6': 'July {{year}}',
                            '7': 'August {{year}}',
                            '8': 'September {{year}}',
                            '9': 'October {{year}}',
                            '10': 'November {{year}}',
                            '11': 'December {{year}}'
                        }
                    }
                },
                'dashboard': {
                    'salesReport': {
                        'title': 'Sales Consultants Report',
                        'list': 'Sales Consultants'
                    },
                    'serviceReport': {
                        'title': 'Service Engineers Report',
                        'list': 'Service Engineers'
                    },
                    'charts': {
                        'startDate': 'Start Date',
                        'endDate': 'End Date',
                        'noEmployeeSelected': 'Please, select an employee',
                        'employeeNameSerie': '{{::last}}, {{::first}}',
                        'months': {
                            '0': 'January {{year}}',
                            '1': 'February {{year}}',
                            '2': 'March {{year}}',
                            '3': 'April {{year}}',
                            '4': 'May {{year}}',
                            '5': 'June {{year}}',
                            '6': 'July {{year}}',
                            '7': 'August {{year}}',
                            '8': 'September {{year}}',
                            '9': 'October {{year}}',
                            '10': 'November {{year}}',
                            '11': 'December {{year}}'
                        }
                    }
                },
                'header': {
                    'title': 'KCM Automotors',
                    'search': {
                        'placeholder': 'Search...',
                        'button': 'Go!'
                    }
                },
                'menu': {
                    'home': 'Home',
                    'about': 'About',
                    'dashboard': 'Dashboard',
                    'finance': 'Finance',
                    'reporting': 'Reporting',
                    'humanResources': 'Human Resources',
                    'support': 'Support'
                },
                'footer': {
                    'copyright': 'KCM Automotors - 2016'
                }
            });

            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('escaped');
        }
    }
})(_);
