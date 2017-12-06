angular.module('app').controller('profissionalDadosCadastroCtrl' , profissionalDadosCadastroCtrl);

function profissionalDadosCadastroCtrl($scope, $state, profissionalService, apiService, constantes) {

		$scope.profissional = profissionalService.getProfissional();

		$scope.listaProfissoes = [];

		apiService.get(constantes.baseUrlOpenAPI + constantes.oapiObterProfissoes).then(function(result){
			$scope.listaProfissoes = result.data;
		});

		$scope.voltarHome = function(){
      		$state.go('profissionalhome');
  		};

  		$scope.alterarProfissional = function(){

  		};

}