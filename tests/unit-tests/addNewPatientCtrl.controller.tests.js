"use strict";

describe('addNewPatientCtrl', function() {

  var formDataServiceMock,
      controller,
      stateMock,
      ionicPopupMock;

  var scope;

  var patient = {};

  patient.patientName = "Bobby-Joe McFee";
  patient.patientDOB = 19950319;
  patient.HospitalNumber = "H01233432J";
  patient.NHSNumber = "PS 456GH";
  patient.patientHeight = 181;
  patient.PreOpWeight = 85;


  //toggles, attribute of what?
  patient.BetaBlockers = true;
  patient.Antibiotic = false;
  patient.BloodTransfusion = true;
  patient.Antihypertensive = false;

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();

    formDataServiceMock = jasmine.createSpyObj('formService spy',['addPatient','getidPatient']);

    stateMock = jasmine.createSpyObj("$state spy", ['go']);

    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

    controller = $controller('addNewPatientCtrl', {
      $scope: scope,
      $state: stateMock,
      $ionicPopup: ionicPopupMock,
      formData: formDataServiceMock
    });

  }));

  beforeEach(inject(function() {
    scope.submitForm(patient);
  }));

  describe('#submitForm', function() {

    it('should call getidPatient on formService',function() {
          expect(formDataServiceMock.getidPatient).toHaveBeenCalled();
        });

    it('calls addPatient on formData service', function() {
      expect(formDataServiceMock.addPatient).toHaveBeenCalled();
    });

    it('if successful it should change state to uCrecovery.staffProfiles', function() {
      expect(stateMock.go).toHaveBeenCalledWith('uCrecovery.patientProfiles');
    });

  })

})
