angular.module('starter.controllers', [])

.controller('oneCtrl', function($scope, ToDo) {
  $scope.data = ToDo.data;
})

.controller('twoCtrl', function($scope, ToDo) {
  var data = {
    newToDo: ""
      };

  
  function addToDo()  {
    ToDo.addToDo(data.newToDo);
    data.newToDo = "";
    }
  
  $scope.data = data;
  $scope.addToDo = addToDo;
  })

.controller('threeCtrl', function($scope){});
;



