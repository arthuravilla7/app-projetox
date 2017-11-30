angular.module('app').factory('empresaService', EmpresaService);

    function EmpresaService(){
       
       var empresa = {};

       return {
            setEmpresa: function(dadosEmpresa){
            empresa = dadosEmpresa;
          },
            getEmpresa: function(){
            return empresa;
           }
       }    

    }
   

