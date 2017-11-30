angular.module('app').factory('profissionalService', profissionalService);

    function profissionalService(){
       
       var service = this;
       var profissional = {};

      service.setProfissional = function(dadosProfissional){
          profissional = dadosProfissional;
      }
      
      service.getProfissional = function(){
          return profissional;
      }

       return service;
      
    }