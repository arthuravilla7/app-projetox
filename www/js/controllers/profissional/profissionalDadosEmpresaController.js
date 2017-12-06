angular.module('app').controller('profissionalDadosEmpresaCtrl' , profissionalDadosEmpresaCtrl);

function profissionalDadosEmpresaCtrl($scope, $state, profissionalService) {
		$scope.profissional = profissionalService.getProfissional();

		$scope.voltarHome = function(){
      		$state.go('profissionalhome');
  		};

}