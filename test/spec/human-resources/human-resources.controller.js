'use strict';

describe('Controller: HumanResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('kcmDashboardApp'));

  var HumanResourcesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HumanResourcesCtrl = $controller('HumanResourcesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HumanResourcesCtrl.awesomeThings.length).toBe(3);
  });
});
