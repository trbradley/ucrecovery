"use strict";

angular.module('app.controllers', [])

.controller('summaryCtrl', function($scope) {

})

.controller('teamProfilesCtrl', function($scope,$cordovaSQLite,formData) {

  $scope.teams = formData.getTeams();

  // should be service not fat controller but lets start here and test

  $scope.save = function(newMessage) {

    $cordovaSQLite.execute(db, 'INSERT INTO Messages (message) VALUES (?)', [newMessage])
        .then(function(result) {
            $scope.statusMessage = "Message saved successful, cheers!";
        }, function(error) {
            $scope.statusMessage = "Error on saving: " + error.message;
        });

  };

  $scope.load = function() {

    // Execute SELECT statement to load message from database.
    $cordovaSQLite.execute(db, 'SELECT * FROM Messages ORDER BY id DESC')
        .then(
            function(result) {

                if (result.rows.length > 0) {
                    $scope.newMessage = result.rows.item(0).message;
                    $scope.statusMessage = "Message loaded successful, cheers!  " + $scope.newMessage;
                }
            },
            function(error) {
                $scope.statusMessage = "Error on loading: " + error.message;
            }
        );
    };

})

.controller('patientDataCtrl', function($scope) {

})

.controller('patientChartsCtrl', function($scope) {

})

.controller('patientProfilesCtrl', function($scope,formData) {
  $scope.patients = formData.getPatients();
})

.controller('andyAppleCtrl', function($scope) {

})

.controller('andyApple2Ctrl', function($scope) {

})

.controller('andyApple3Ctrl', function($scope) {

})

.controller('addNewPatientCtrl', function($scope) {

})

.controller('staffProfilesCtrl', function($scope,formData) {
  $scope.staffmems = formData.getStaff();
})

.controller('addNewStaffCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.staff = {};
  $scope.submitForm = function(staff) {
    if(staff.name && staff.role && staff.contact) {
      $scope.staffmems = formData.addStaff(staff);
      $state.go('uCrecovery.staffProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all the boxes',
        template: 'Needs name, role, contact and team'
      });
    }
  };
})

.controller('addNewTeamCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.team = {};
  $scope.submitForm = function(team) {
    if(team.name && team.location) {
      $scope.teams = formData.addTeam(team);
      $state.go('uCrecovery.teamProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all boxes',
        template: 'Need both name and location'
      });
    }
  };

});
