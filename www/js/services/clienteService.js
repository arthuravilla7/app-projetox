angular.module('app').factory('clienteService', clienteService);

    function clienteService(){
       
       var service = this;
       var cliente = {};

      service.setCliente = function(dadosCliente){
          cliente = dadosCliente;
      }
      
      service.getCliente = function(){
          return cliente;
      }

       return service;
      
    }