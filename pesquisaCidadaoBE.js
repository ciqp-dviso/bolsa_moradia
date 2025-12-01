"use strict";

/**
 * Módulo:    pesquisaCidadaoBE.gs
 * Objetivo:  Pesquisar um cidadão na base do CADUNICO
 */


/**
 * Função back end que pesquisa um cidadão, pelo CPF, na base do CADUNICO
 *  
 * @param {String} cpfCidadao: O CPF do cidadão
 * 
 * @return {Objetc} Um objeto com os dados do cidadão, caso ele seja localizado 
 *                  na base do CAD ÚNICO. ou o booleano false, se não localizado
 */
function pesquisaCidadaoBE( cpfCidadao ) {

  Logger.log(Session.getActiveUser().getEmail());

  // Faz a pesquisa na base do CAD ÚNICO  
  let resultadoPesquisa = BUFFER_CADUNICO.filter( item => {    
    return( item[CPF] == cpfCidadao ); 
  });


  // Retorna o resultado da pesquisa
  if( resultadoPesquisa.length > 0 ) {

    let cidadao = resultadoPesquisa[0];

    return {
        id:                        cidadao[ID],
        nome:                      cidadao[NOME],
        cpf:                       cidadao[CPF],
        dataAtualizacaoCadastral:  cidadao[DATA_ATUALIZACAO_CADASTRO],
        nomeSocial:                cidadao[NOME_SOCIAL],
        nomeMae:                   cidadao[NOME_MAE],
        dataNascimento:            cidadao[DATA_NASCIMENTO],
        racaCor:                   cidadao[RACA_COR],
        renda:                     cidadao[RENDA],
        fonteRenda:                cidadao[FONTE_RENDA],
        numMembrosFamilia:         cidadao[NUM_MENBROS_FAMILIA],
        tempoEmBH:                 cidadao[TEMPO_EM_BH],
        tempoNasRuas:              cidadao[TEMPO_NAS_RUAS]
    };

  } else {
    return false;
  }

} // Fim da função pesquisaCidadaoBE 



/** Função para testar a função pesquisaCidadaoBE */
function teste_pesquisaCidadaoBE() {

  let cidadao = pesquisaCidadaoBE( "01538118629" );

  console.log( cidadao );

} // Fim da função teste_pesquisaCidadaoBE




/**
 * ##### FIM DO MÓDULO pesquisaCidadaoBE.gs #####
 */