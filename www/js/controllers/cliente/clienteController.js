angular.module('app').controller('clienteCtrl' , clienteCtrl);

function clienteCtrl($scope, $state) {

	$scope.irListaContrato = function(){
		$state.go('clientelistacontratos');
	}

	$scope.irDadosCadastro = function(){
		$state.go('clientedadoscadastro');
	}

	$scope.voltarHome = function(){
      		$state.go('login');
  	};
  
}