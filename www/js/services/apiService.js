angular.module('app').factory('apiService', apiService);

    function apiService($http){
       
      var service = this;

      service.get = function(uri, params){
        if(params)
          return $http.get(uri + "/" + params);
        else
          return $http.get(uri);
      }

      service.post = function(uri, requestBody){
        return $http.post(uri, requestBody);
      }

      return service; 

    }