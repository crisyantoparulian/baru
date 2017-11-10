app.controller('MainController',['$scope','KalkulatorFactory',function($scope,KalkulatorFactory){ 

      $scope.title='Kalkulator Factory'; 

      $scope.penambahan=function(){ 
        $scope.hasil=KalkulatorFactory.tambah($scope.angkaA,$scope.angkaB); 
      } 

      $scope.pengurangan=function(){   
        $scope.hasil=KalkulatorFactory.kurang($scope.angkaA,$scope.angkaB);
      } 

      $scope.perkalian=function(){ 
        $scope.hasil=KalkulatorFactory.kali($scope.angkaA,$scope.angkaB); 
      } 
      $scope.pembagian=function(){ 
        $scope.hasil=KalkulatorFactory.bagi($scope.angkaA,$scope.angkaB); 
      } 
}]);