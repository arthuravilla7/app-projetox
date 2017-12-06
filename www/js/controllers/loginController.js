angular.module('app').controller('loginCtrl' , loginCtrl);

function loginCtrl($scope, $state, AuthService, empresaService, profissionalService, clienteService) {

    $scope.mensagemErro = null;
    //profissional
    $scope.email = "josedasilva@mail"
    $scope.senha = "123123"

    //cliente
    //$scope.email = "cliente@mail.com"
    //$scope.senha = "123123"

    //empresa
    //$scope.email = "empresa@mail"
    //$scope.senha = "123qwe"


  $scope.login = function(){
    AuthService.login({login: $scope.email, senha: $scope.senha}).then(function(result){
    	AuthService.setToken(result.data.token);
    	if(result.data.perfil === usuarioPerfilEnum.EMPRESA){
            empresaService.setEmpresa(result.data.dadosEmpresa);
    		$state.go('empresahome');
    	}
    	else if(result.data.perfil === usuarioPerfilEnum.PROFISSIONAL){
            profissionalService.setProfissional(result.data.dadosProfissional);
    		$state.go('profissionalhome');
    	}
    	else if(result.data.perfil === usuarioPerfilEnum.CLIENTE){
            clienteService.setCliente(result.data.dadosCliente);
    		$state.go('clientehome');
    	}
    }, function(error){
    	$scope.mensagemErro = error.data;
    });
  }

  $scope.irCadastro = function(){
    $state.go('cadastro');
  }
}
