var app=angular.module('MyApp',[]); 

app.factory('KalkulatorFactory', function(){ 
    var kalkulator={}; 

    kalkulator.tambah=function(angkaA, angkaB){ 
      return parseInt(angkaA)+parseInt(angkaB); 
    }; 

    kalkulator.kurang=function(angkaA, angkaB){
      return angkaA-angkaB; 
    }; 

    kalkulator.kali=function(angkaA, angkaB){ 
      return angkaA*angkaB; 
    }; 

    kalkulator.bagi=function(angkaA, angkaB){ 
      return angkaA/angkaB; 
    }; 

    return kalkulator; 
});