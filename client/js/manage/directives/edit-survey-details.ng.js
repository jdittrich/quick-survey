angular.module('quick-survey').directive('editSurveyDetails', function () {
  return {
    restrict: 'A',
    scope: {
      survey: '=',
      form: '='
    },
    controller: function ($scope) {
      $scope.save = function(survey) {
        survey.save();
      };
    },
    templateUrl: 'client/js/manage/directives/edit-survey-details.ng.html',
  };
});
