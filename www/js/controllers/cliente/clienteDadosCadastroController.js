angular.module('app').controller('clienteDadosCadastroCtrl' , clienteDadosCadastroCtrl);

function clienteDadosCadastroCtrl($scope, $state,clienteService) {
		$scope.cliente = clienteService.getCliente();

		$scope.voltarHome = function(){
      		$state.go('clientehome');
  		};

  		$scope.alterarCliente = function(){

  		};

}