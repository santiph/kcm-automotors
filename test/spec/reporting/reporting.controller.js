'use strict';

describe('Controller: ReportingCtrl', function () {

  // load the controller's module
  beforeEach(module('kcmDashboardApp'));

  var ReportingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportingCtrl = $controller('ReportingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportingCtrl.awesomeThings.length).toBe(3);
  });
});
