angular.module('app').controller('empresaListaContratosCtrl', EmpresaListaContratosCtrl);

function EmpresaListaContratosCtrl($scope, $state, empresaService, apiService, constantes, $ionicModal) {

	$scope.empresa = empresaService.getEmpresa();
	$scope.listaAtividades = [];
	$scope.atividadeSelecionada = {};

	function obterContratosPorEmpresa(){
		apiService.get(constantes.baseUrlAPI + constantes.apiObterAtividadesPorEmpresa, $scope.empresa.id).then(function(result){
			$scope.listaAtividades = result.data;
		});
	}
	obterContratosPorEmpresa();

  $scope.voltarHome = function(){
      $state.go('empresahome');
  }

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