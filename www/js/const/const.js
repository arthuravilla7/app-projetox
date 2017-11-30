angular.module('app').constant("constantes", {

    //DEV
    //baseUrlOpenAPI: "http://localhost:3000/oapi",
    //baseUrlAPI: "http://localhost:3000/api",

    //PRODUCAO
    baseUrlOpenAPI: "http://empresa-faeterj-com.umbler.net/oapi",
    baseUrlAPI: "http://empresa-faeterj-com.umbler.net/api",


    oapiLogin: "/login",
    oapiValidateToken: "/validateToken",
    oapiCriarCliente: "/criarcliente",
    oapiCriarEmpresa: "/criarempresa",
    oapiCriarProfissional: "/criarprofissional",
    oapiObterProfissoes: "/obterprofissoes",

    //rotas empresa

    //rotas profissional
    apiObterProfissionaisPorEmpresa: "/obterprofissionaisporempresa",
    apiObterProfissionaisSemEmpresa: "/obterprofissionaissemempresa",
    apiObterProfissionaisSemEmpresaComFiltro: "/obterprofissionaissemempresacomfiltro",
    apiDesassociarProfissional: "/desassociarprofissional",
    apiAssociarProfissional: "/associarprofissional",

    //rotas cliente
    apiObterClientes: "/obterclientes",

    //rotas de profissão
    //apiObterProfissoes: "/obterprofissoes",

    //rotas de atividade/contrato
    apiCriarAtividade: "/criaratividade",
    apiObterAtividadesPorProfissional: "/obteratividadesporprofissional",
    apiObterAtividadesPorEmpresa: "/obteratividadesporempresa",
    apiObterAtividadesPorCliente: "/obteratividadesporcliente",

    //rotas de movimento
    apiCriarMovimento: "/criarmovimento",

    //rotasa de follow up/acompanhamento
    apiCriarAcompanhamento: "/criarfollowup"

});
