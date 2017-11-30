angular.module('app').controller('clienteListaContratosCtrl', ClienteListaContratosCtrl);

function ClienteListaContratosCtrl($scope, $state, clienteService, apiService, constantes, $ionicModal) {

	$scope.cliente = clienteService.getCliente();
	$scope.listaAtividades = [];
	$scope.atividadeSelecionada = {};

	function obterContratosPorEmpresa(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterAtividadesPorCliente, $scope.cliente.id).then(function(result){
			$scope.listaAtividades = result.data;
		});
	}
	obterContratosPorEmpresa();

  $scope.voltarHome = function(){
      $state.go('clientehome');
  };

  $scope.getDataFormatada = function(data){
      return moment(data).format('LL');
  }
// *********************** modal lista movimentos

	$ionicModal.fromTemplateUrl('modalListaMovimentos.html',{
  		scope: $scope,
    	animation: 'slide-in-up'
  	}).then(function(modal){
  		$scope.modalListaMovimentos = modal;
  	});

  	$scope.abrirModalListaMovimentos = function(atividadeSelecionada) {
  		$scope.atividadeSelecionada = atividadeSelecionada;
    	$scope.modalListaMovimentos.show();
  	};
  	$scope.fecharModalListaMovimentos = function() {
  		$scope.atividadeSelecionada = {};
   		$scope.modalListaMovimentos.hide();
  	};

}