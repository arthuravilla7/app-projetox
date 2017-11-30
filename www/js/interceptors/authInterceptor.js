angular.module('app').factory('authInterceptor', AuthInterceptor)

function AuthInterceptor ($location, AuthService, $q) {
  return {
    request: function(config) {
      config.headers = config.headers || {};

      if (AuthService.getToken()) {
        config.headers['Authorization'] = AuthService.getToken();
      }

      return config;
    },

    responseError: function(response) {
      if (response.status === 401 || response.status === 403) {
        $location.path('/login');
      }

      return $q.reject(response);
    }
  }
}
