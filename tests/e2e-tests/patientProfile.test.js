"use strict";

describe('Patient profile pages',function() {

  var addNewPatientButton, createProfileButton2;

  var patientName,
      patientDOB,
      HospitalNumber,
      NHSNumber,
      patientHeight,
      PreOpWeight;

  // var BetaBlockers,
  //     Antibiotic,
  //     BloodTransfusion,
  //     Antihypertensive;


  describe('showing patient profile pages',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/patientProfiles');
      addNewPatientButton = element(by.linkText('Add New Patient'));
    });

    it('should show patient profiles on page',function() {
      expect(element.all(by.repeater('patient in patients')).count()).toEqual(2);
    });

    it('it should show the add patient, new patient page when add patient button pressed',function() {
      addNewPatientButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addPatient');
      });
    });
  });

  describe('add Patient page',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/addPatient');
      // createProfileButton2 = element(by.id('addNewPatient-button95'));

      patientName = element(by.model('patient.patientName'));
      patientDOB = element(by.model('patient.patientDOB'));
      HospitalNumber = element(by.model('patient.HospitalNumber'));
      NHSNumber = element(by.model('patient.NHSNumber'));
      patientHeight = element(by.model('patient.patientHeight'));
      PreOpWeight = element(by.model('patient.PreOpWeight'));

      patientName.sendKeys('Gary Norton');
      patientDOB.sendKeys('19031994');
      HospitalNumber.sendKeys('H0923477');
      NHSNumber.sendKeys('PSQ H345');
      patientHeight.sendKeys('180');
      PreOpWeight.sendKeys('85');


    });


    it('should add a patient profile',function() {
      element.all(by.id('addNewPatient-button95')).get(0).click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/patientProfiles');
        expect(element.all(by.repeater('patient in patients')).count()).toEqual(3);
      });
    });

    it('should toggle on form',function() {

      // BetaBlockers = element(by.model('patient.BetaBlockers'));
      // Antibiotic = element(by.model('patient.Antibiotic'));
      // BloodTransfusion = element(by.model('patient.BloodTransfusion'));
      // Antihypertensive = element(by.model('patient.Antihypertensive'));

      // Example of checked
      // <label>Check me to check both: <input type="checkbox" ng-model="master"></label><br/>
      // <input id="checkSlave" type="checkbox" ng-checked="master" aria-label="Slave input">

      // it('should check both checkBoxes', function() {
      //   expect(element(by.id('checkSlave')).getAttribute('checked')).toBeFalsy();
      //   element(by.model('master')).click();
      //   expect(element(by.id('checkSlave')).getAttribute('checked')).toBeTruthy();
      // });

      //From Patient Form rendered
      //<input type="checkbox" ng-checked="true" checked="checked">

      // element(by.model('BetaBlockers')).click();
      // element(by.model('Antibiotic')).click();
      // element(by.model('BloodTransfusion')).click();
      // element(by.model('Antihypertensive')).click();

    });

    // it('should show pop up if all fields not filled in',function() {
    //   patientName.sendKeys('');
    //   patientDOB.sendKeys('');
    //   HospitalNumber.sendKeys('');
    //   NHSNumber.sendKeys('');
    //   patientHeight.sendKeys('');
    //   PreOpWeight.sendKeys('');
    //   createProfileButton2.click().then(function() {
    //     expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addPatient');
    //     var popup = element(by.css('.popup-container.popup-showing.active'));
    //     expect(popup.isDisplayed()).toBeTruthy();
    //   });
    // });
  });
});