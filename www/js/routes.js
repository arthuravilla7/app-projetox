angular.module('app').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('main', {
      cache: false,
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
  })
  .state('login', {
       cache: false,
       url: '/login',
       templateUrl: 'templates/login.html',
       controller: 'loginCtrl'
   })
   .state('cadastro', {
        cache: false,
        url: '/cadastro',
        templateUrl: 'templates/cadastro.html',
        controller: 'cadastroCtrl'
   })
  //******** bloco de rotas de empresa 
  .state('empresahome', {
    url: '/empresahome',
    templateUrl: 'templates/empresa/home.html',
    controller: 'empresaCtrl'
  })
  .state('empresalistaprofissionais', {
    url: '/empresalistaprofissionais',
    templateUrl: 'templates/empresa/empresalistaprofissionais.html',
    controller: 'empresaListaProfissionaisCtrl'
  })
  .state('empresapesquisaprofissional', {
    url: '/empresapesquisaprofissional',
    templateUrl: 'templates/empresa/empresapesquisaprofissional.html',
    controller: 'empresaPesquisaProfissionaisCtrl'
  })
  .state('empresalistacontratos', {
    url: '/empresalistacontratos',
    templateUrl: 'templates/empresa/empresalistacontratos.html',
    controller: 'empresaListaContratosCtrl'
  })
  .state('empresacriacontratos', {
    url: '/empresacriacontratos',
    templateUrl: 'templates/empresa/empresacriacontratos.html',
    controller: 'empresaCriaContratosCtrl'
  })

  //****** bloco de rotas de profissional
  .state('profissionalhome', {
    url: '/profissionalhome',
    templateUrl: 'templates/profissional/home.html',
    controller: 'profissionalCtrl'
  })
  .state('profissionallistacontratos', {
    url: '/profissionallistacontratos',
    templateUrl: 'templates/profissional/profissionallistacontratos.html',
    controller: 'profissionalListaContratosCtrl'
  })

  .state('profissionadadosempresa', {
    url: '/profissionaldadosempresa',
    templateUrl: 'templates/profissional/profissionaldadosempresa.html',
    controller: 'profissionalDadosEmpresaCtrl'
  })

  //***** bloco de rotas de cliente
  .state('clientehome', {
    url: '/clientehome',
    templateUrl: 'templates/cliente/home.html',
    controller: 'clienteCtrl'
  })
  .state('clientelistacontratos', {
    url: '/clientelistacontratos',
    templateUrl: 'templates/cliente/clientelistacontratos.html',
    controller: 'clienteListaContratosCtrl'
  })
  .state('clientedadoscadastro', {
    url: '/clientedadoscadastro',
    templateUrl: 'templates/cliente/clientedadoscadastro.html',
    controller: 'clienteDadosCadastroCtrl'
  })

  $urlRouterProvider.otherwise('login');
});
