"use strict";
    


/**
 * Gerador de Checkbox
 *
 * @param {Array} tabela - Tabela de onde os ids e os nomes das opções serão lidos
 * @param {String} nameCheckBox - O name do checkbox que será gerado
 * @param {Integer} inline - 1 se o checkbox a ser gerado for inline, 0 caso contrário
 */
function gerarCheckBox( tabela, nameCheckBox, inline ) {
 
   

  // Gera, dinamicamente, as opções do Check Box
  let checkBoxGerado = "";
  let idItem;
  let classInline = inline ? "form-check-inline" : "";

  tabela.forEach( item => {

    if( parseInt( item[ATIVO] ) ) {

      idItem = nameCheckBox + item[ID];

      checkBoxGerado += 
      `<div class="form-check ${classInline}">
         <input class="form-check-input" type="checkbox" name="${nameCheckBox}" id="${idItem}" value="${item[ID]}">
         <label class="form-check-label" for="${idItem}">${item[NOME]}</label>
       </div>`;

    }
  }); // Fim do tabela.forEach
      
  return checkBoxGerado;

} // Fim da função gerarCheckBox



/**
 * Gerador de Select
 *
 * @param {Array} tabela - Tabela de onde os ids e os nomes das opções serão lidos
 *
 */
function gerarSelect( tabela ) {
 
  // Gera, dinamicamente, as opções do Check Box
  let selectGerado = `<option selected value="">Selecione</option>`;

  tabela.forEach( item => {

    if( parseInt( item[ATIVO] ) ) {

      selectGerado += `<option value="${item[ID]}">${item[NOME]}</option>`;

    }

  }); // Fim do tabela.forEach
      
  // Retorna o select gerado  
  return selectGerado;

} // Fim da função gerarSelect



/**
 * Gerador de Radio Button
 *
 * @param {Array} tabela - Tabela de onde os ids e os nomes das opções serão lidos
 * @param {String} nameRadioButton - O name do radio button que será gerado
 * @param {Integer} inline - 1 se o radio button a ser gerado for inline, 0 caso contrário
 */
function gerarRadioButton( tabela, nameRadioButton, inline ) {
 
  // Gera, dinamicamente, as opções do Radio Button
  let radioButtonGerado = "";
  let idItem;
  let classInline = inline ? "form-check-inline" : "";

  tabela.forEach( item => {

    if( parseInt( item[ATIVO] ) ) {

      idItem = nameRadioButton + item[ID];

      radioButtonGerado += 
      `<div class="form-check ${classInline}">
         <input class="form-check-input" type="radio" name="${nameRadioButton}" id="${idItem}" value="${item[ID]}">
         <label class="form-check-label" for="${idItem}">${item[NOME]}</label>
       </div>`;

    }
  }); // Fim do tabela.forEach
      
  return radioButtonGerado;

} // Fim da função gerarRadioButton

