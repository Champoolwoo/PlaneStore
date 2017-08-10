angular.module('app', [])
	.controller('PlaneController', function($scope,$http) {
	
	$scope.product = [
		{
      id: 'D001',
      pic: '../picture/drone/D001.jpg',
      name: 'โดรนบังคับ',
      type: 'Drone',
      price: 2500,
      amount: 1,
      done: false
    },{
      id: 'D002',
      pic: '../picture/drone/D002.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 50000,
      amount: 1,
      done: false
    },{
      id: 'D003',
      pic: '../picture/drone/D003.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 4500,
      amount: 1,
      done: false
    },{
      id: 'D004',
      pic: '../picture/drone/D004.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 5500,
      amount: 1,
      done: false
    },{
      id: 'D005',
      pic: '../picture/drone/D005.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 6500,
      amount: 1,
      done: false
    },{
      id: 'D006',
      pic: '../picture/drone/D006.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 7500,
      amount: 1,
      done: false
    },{
      id: 'D007',
      pic: '../picture/drone/D007.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'D008',
      pic: '../picture/drone/D008.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'D009',
      pic: '../picture/drone/D009.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'D010',
      pic: '../picture/drone/D010.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'D011',
      pic: '../picture/drone/D011.jpg',
      name: 'โครนบังคับ',
      type: 'Drone',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'H001',
      pic: '../picture/helicopter/H001.jpg',
      name: 'เฮริคอปเตอร์บังคับ',
      type: 'Helicopter',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'H002',
      pic: '../picture/helicopter/H002.jpg',
      name: 'เฮริคอปเตอร์บังคับ',
      type: 'Helicopter',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'H003',
      pic: '../picture/helicopter/H003.jpg',
      name: 'เฮริคอปเตอร์บังคับ',
      type: 'Helicopter',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'H004',
      pic: '../picture/helicopter/H004.jpg',
      name: 'เฮริคอปเตอร์บังคับ',
      type: 'Helicopter',
      price: 8500,
      amount: 1,
      done: false
    },{
      id: 'H005',
      pic: '../picture/helicopter/H005.jpg',
      name: 'เฮริคอปเตอร์บังคับ',
      type: 'Helicopter',
      price: 8500,
      amount: 1,
      done: false
    }
	]

  $scope.list = []
  // $scope.sum = 0
  $scope.addlist = function(show){
    
    if ($scope.checkaddlist(show.id)) {
      $scope.list[$scope.checkindex(show.id)].amount++
    } else {
      $scope.list.push(show)
    }
    
    $scope.cal(show.id)
    console.log($scope.list)
  }

  $scope.deletelist = function(index) {
    if ($scope.list[index].amount > 1) {
      $scope.list[index].amount -= 1
    }else {
      $scope.list.splice(index, 1)
    }
    $scope.cal()
  }

  $scope.checkaddlist = function (id) {
    for (var i = 0; i < $scope.list.length; i++) {
       if ($scope.list[i].id === id) {
         return true
      }
    }
  }

  $scope.checkindex = function (id) {
    for (var i = 0; i < $scope.list.length; i++) {
      if ($scope.list[i].id === id) {
        return i
      }
    }
  }

  $scope.cal = function(id){
    $scope.sumamount = 0
    $scope.sum = 0
    for(var i = 0;i < $scope.list.length;i++){
      $scope.sumamount = $scope.list[i].amount * $scope.list[i].price
      $scope.sum += $scope.sumamount
    }
  }
  
})//end
