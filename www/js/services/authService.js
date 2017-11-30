angular.module('app').factory('AuthService', AuthService);

function AuthService ($window, $q, constantes, $injector) {
  
    var service = this;
  
    service.getToken = function () {
      return $window.localStorage.token;
    }

    service.setToken = function (token) {
      $window.localStorage.token = token;
    }

    service.login = function (data) {  
      var http = $injector.get('$http');    //login
      return http.post(constantes.baseUrlOpenAPI + '/login', data);
    }

    service.cadastroCliente = function (data) {      //cadastro
      $http.post(constantes.baseUrlOpenAPI + '/criarcliente', data);
    }

    service.cadastroProfissional = function (data) {      //cadastro
      $http.post(constantes.baseUrlOpenAPI + 'criarprofissional', data);
    }

    service.cadastroEmpresa = function (data) {      //cadastro
      $http.post(constantes.baseUrlOpenAPI + 'criarempresa', data);
    }

    service.logout = function (data) {
      delete $localStorage.token;
      $q.when();
    }

    return service;
}
