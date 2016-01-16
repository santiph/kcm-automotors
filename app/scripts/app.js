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
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'pascalprecht.translate'
    ])
    .config(configuration);

    configuration.$inject = ['$routeProvider', '$translateProvider'];

    function configuration($routeProvider, $translateProvider) {

      configureRouter();
      configureTranslate();

      function configureRouter() {
        $routeProvider
          .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard'
          })
          .when('/human-resources', {
            templateUrl: 'views/human-resources.html',
            controller: 'HumanResourcesCtrl',
            controllerAs: 'humanResources'
          })
          .when('/finance', {
            templateUrl: 'views/finance.html',
            controller: 'FinanceCtrl',
            controllerAs: 'Finance'
          })
          .when('/reporting', {
            templateUrl: 'views/reporting.html',
            controller: 'ReportingCtrl',
            controllerAs: 'reporting'
          })
          .when('/support', {
            templateUrl: 'views/support.html',
            controller: 'SupportCtrl',
            controllerAs: 'support'
          })
          .otherwise({
            redirectTo: '/'
          });
      }

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