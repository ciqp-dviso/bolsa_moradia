"use strict";

/**
 * Módulo:    tabelas.gs
 * Objetivo:  Armazenar referências a base de dados (planilhas) do sistema BOLSA MORADIA
 */


/**
 * Planilha CODIGOS contendo as tabelas 
 *     . RESPOSTAS_SIMPLES
 *     . ORGAOS_ENCAMINHADORES 
 *     . FONTES_DE_RENDA
 *     . TIPOS_DE_TRABALHO
 *     . RACAS_CORES
 *     . IDENTIDADES_DE_GENERO
 *     . ORIENTACOES_SEXUAIS 
 *     . CONDICOES_SAUDE
 *     . QUANTIDADE_PROBLEMAS_DE_SAUDE
 *     . VIOLENCIAS 
 *     . INTERVALO_DE_TEMPO 
 *     . HISTORICO_INSTITUCIONALIZACAO
 *     . ESCOLARIDADE
 *     . PARENTESCO
 *     . BENEFICIO
 */
const PLANILHA_CODIGOS_ID  =  "1jf1vIfAjYxks0rkVr6KBSt8xrlRFqt_q57ldp2fCT3I";
const PLANILHA_CODIGOS     =  SpreadsheetApp.openById(PLANILHA_CODIGOS_ID);

const TABELA_RESPOSTAS_SIMPLES                =  PLANILHA_CODIGOS.getSheetByName('RESPOSTAS_SIMPLES');
const TABELA_ORGAOS_ENCAMINHADORES            =  PLANILHA_CODIGOS.getSheetByName('ORGAOS_ENCAMINHADORES');
const TABELA_FONTES_DE_RENDA                  =  PLANILHA_CODIGOS.getSheetByName('FONTES_DE_RENDA');
const TABELA_TIPOS_DE_TRABALHO                =  PLANILHA_CODIGOS.getSheetByName('TIPOS_DE_TRABALHO');
const TABELA_RACAS_CORES                      =  PLANILHA_CODIGOS.getSheetByName('RACAS_CORES');
const TABELA_IDENTIDADES_DE_GENERO            =  PLANILHA_CODIGOS.getSheetByName('IDENTIDADES_DE_GENERO');
const TABELA_ORIENTACOES_SEXUAIS              =  PLANILHA_CODIGOS.getSheetByName('ORIENTACOES_SEXUAIS');
const TABELA_CONDICOES_SAUDE                  =  PLANILHA_CODIGOS.getSheetByName('CONDICOES_SAUDE');
const TABELA_QUANTIDADE_PROBLEMAS_DE_SAUDE    =  PLANILHA_CODIGOS.getSheetByName('QUANTIDADE_PROBLEMAS_DE_SAUDE');
const TABELA_VIOLENCIAS                       =  PLANILHA_CODIGOS.getSheetByName('VIOLENCIAS');
const TABELA_INTERVALO_DE_TEMPO               =  PLANILHA_CODIGOS.getSheetByName('INTERVALO_DE_TEMPO');
const TABELA_HISTORICO_INSTITUCIONALIZACAO    =  PLANILHA_CODIGOS.getSheetByName('HISTORICO_INSTITUCIONALIZACAO');
const TABELA_ESCOLARIDADE                     =  PLANILHA_CODIGOS.getSheetByName('ESCOLARIDADE');
const TABELA_PARENTESCO                       =  PLANILHA_CODIGOS.getSheetByName('PARENTESCO');
const TABELA_BENEFICIO                        =  PLANILHA_CODIGOS.getSheetByName('BENEFICIO');


const BUFFER_RESPOSTAS_SIMPLES                =  TABELA_RESPOSTAS_SIMPLES.getDataRange().getDisplayValues().splice(1);
const BUFFER_ORGAOS_ENCAMINHADORES            =  TABELA_ORGAOS_ENCAMINHADORES.getDataRange().getDisplayValues().splice(1);
const BUFFER_FONTES_DE_RENDA                  =  TABELA_FONTES_DE_RENDA.getDataRange().getDisplayValues().splice(1);
const BUFFER_TIPOS_DE_TRABALHO                =  TABELA_TIPOS_DE_TRABALHO.getDataRange().getDisplayValues().splice(1);
const BUFFER_RACAS_CORES                      =  TABELA_RACAS_CORES.getDataRange().getDisplayValues().splice(1);
const BUFFER_IDENTIDADES_DE_GENERO            =  TABELA_IDENTIDADES_DE_GENERO.getDataRange().getDisplayValues().splice(1);
const BUFFER_ORIENTACOES_SEXUAIS              =  TABELA_ORIENTACOES_SEXUAIS.getDataRange().getDisplayValues().splice(1);
const BUFFER_CONDICOES_SAUDE                  =  TABELA_CONDICOES_SAUDE.getDataRange().getDisplayValues().splice(1);
const BUFFER_QUANTIDADE_PROBLEMAS_DE_SAUDE    =  TABELA_QUANTIDADE_PROBLEMAS_DE_SAUDE.getDataRange().getDisplayValues().splice(1);
const BUFFER_VIOLENCIAS                       =  TABELA_VIOLENCIAS.getDataRange().getDisplayValues().splice(1);
const BUFFER_INTERVALO_DE_TEMPO               =  TABELA_INTERVALO_DE_TEMPO.getDataRange().getDisplayValues().splice(1);
const BUFFER_HISTORICO_INSTITUCIONALIZACAO    =  TABELA_HISTORICO_INSTITUCIONALIZACAO.getDataRange().getDisplayValues().splice(1);
const BUFFER_ESCOLARIDADE                     =  TABELA_ESCOLARIDADE.getDataRange().getDisplayValues().splice(1);
const BUFFER_PARENTESCO                       =  TABELA_PARENTESCO.getDataRange().getDisplayValues().splice(1);
const BUFFER_BENEFICIO                        =  TABELA_BENEFICIO.getDataRange().getDisplayValues().splice(1);


const NUM_RESPOSTAS_SIMPLES                =  BUFFER_RESPOSTAS_SIMPLES.length;
const NUM_ORGAOS_ENCAMINHADORES            =  BUFFER_ORGAOS_ENCAMINHADORES.length;
const NUM_FONTES_DE_RENDA                  =  BUFFER_FONTES_DE_RENDA.length;
const NUM_TIPOS_DE_TRABALHO                =  BUFFER_TIPOS_DE_TRABALHO.length;
const NUM_RACAS_CORES                      =  BUFFER_RACAS_CORES.length;
const NUM_IDENTIDADES_DE_GENERO            =  BUFFER_IDENTIDADES_DE_GENERO.length;
const NUM_ORIENTACOES_SEXUAIS              =  BUFFER_ORIENTACOES_SEXUAIS.length;
const NUM_CONDICOES_SAUDE                  =  BUFFER_CONDICOES_SAUDE.length;
const NUM_QUANTIDADE_PROBLEMAS_DE_SAUDE    =  BUFFER_QUANTIDADE_PROBLEMAS_DE_SAUDE.length;
const NUM_VIOLENCIAS                       =  BUFFER_VIOLENCIAS.length;
const NUM_INTERVALO_DE_TEMPO               =  BUFFER_INTERVALO_DE_TEMPO.length;
const NUM_HISTORICO_INSTITUCIONALIZACAO    =  BUFFER_HISTORICO_INSTITUCIONALIZACAO.length;
const NUM_ESCOLARIDADE                     =  BUFFER_ESCOLARIDADE.length;
const NUM_PARENTESCO                       =  BUFFER_PARENTESCO.length;
const NUM_BENEFICIO                        =  BUFFER_BENEFICIO.length;


/**
 * Planilha CADUNICO
 */
const PLANILHA_CADUNICO_ID        =  "1hI3gHo9eLbk1sCkarSD5lWFjwxFf83DThFaWNPNP3ak";
const PLANILHA_CADUNICO           =  SpreadsheetApp.openById(PLANILHA_CADUNICO_ID);
const TABELA_CADUNICO             =  PLANILHA_CADUNICO.getSheetByName('BASE_DADOS');
let BUFFER_CADUNICO               =  TABELA_CADUNICO.getDataRange().getDisplayValues().splice(1);
let NUM_CADUNICO                  =  BUFFER_CADUNICO.length;
const NUM_COLUNAS_TABELA_CADUNICO =  13;


/**
 * Planilha CASOS
 */
const PLANILHA_CASOS_ID        =  "18o5wcTGkF5kVEFMrDr_dmwEgQWqSXemBf0IuNc3tQNU";
const PLANILHA_CASOS           =  SpreadsheetApp.openById(PLANILHA_CASOS_ID);
const TABELA_CASOS             =  PLANILHA_CASOS.getSheetByName('CASOS');
let BUFFER_CASOS               =  TABELA_CASOS.getDataRange().getDisplayValues().splice(1);
let NUM_CASOS                  =  BUFFER_CASOS.length;
const NUM_COLUNAS_TABELA_CASOS =  40;

function refreshBufferCasos() {
  BUFFER_CASOS  =  TABELA_CASOS.getDataRange().getDisplayValues().splice(1);
  NUM_CASOS = BUFFER_CASOS.length;
}


/**
 * Planilha USUARIOS
 */
const PLANILHA_USUARIOS_ID        =  "1riI-LGssaVCrFeEai-he80uAkTauUQOIUa8DMc418rg";
const PLANILHA_USUARIOS           =  SpreadsheetApp.openById(PLANILHA_USUARIOS_ID);
const TABELA_USUARIOS             =  PLANILHA_USUARIOS.getSheetByName('USUARIOS');
const BUFFER_USUARIOS             =  TABELA_USUARIOS.getDataRange().getDisplayValues().splice(1);
const NUM_USUARIOS                =  BUFFER_USUARIOS.length;



/**
 * Constantes que armazenam as posições das colunas nas tabelas
 */

// Posição da coluna ID nas planilhas CODIGOS, CASOS, USUARIOS e CADUNICO
const ID = 0;


// Posições das colunas NOME e ATIVO nas tabelas da planilha CODIGOS e USUARIOS
const NOME  = 1;
const ATIVO = 2;


// Posições das colunas da planilha USUARIOS
const EMAIL             = 1;
const REGIONAL_USUARIO  = 3;
const TIPO_USUARIO      = 4;


// Posições das colunas da planilha CADUNICO
const CPF                        = 2;
const DATA_ATUALIZACAO_CADASTRO  = 3;
const NOME_SOCIAL                = 4;
const NOME_MAE                   = 5;
const DATA_NASCIMENTO            = 6;
const RACA_COR                   = 7;
const RENDA                      = 8;
const FONTE_RENDA                = 9;
const NUM_MENBROS_FAMILIA        = 10;
const TEMPO_EM_BH                = 11;
const TEMPO_NAS_RUAS             = 12;


/**
 * ##### FIM DO MÓDULO tabelas.gs #####
 */





















