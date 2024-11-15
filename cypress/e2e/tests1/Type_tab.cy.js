

/// <reference types="cypress" /> 
    // tab
 require('cypress-plugin-tab') // para los tab siempre agragar esta libreria

  /* .tab --> tecla tabulador para recorrer una interfaz o un formulario.
  Buscamos la instalacion del plugin tab en la documentacion de npm
  https://www.npmjs.com/package/cypress-plugin-tab
  copiar y pegar en consola de visual studio /d Cypress
  npm install -D cypress-plugin-tab 
    */

describe(" Ejemplo funcion Tab", () => {

    it ("type tab", () =>{
        cy.visit("https://opencart.abstracta.us/index.php?route=account/register")
        cy.wait(1500)
        cy.get("#input-firstname").type("Yuleidys").tab().
            type("Torres").tab().
            type("ytorres@gmail.com").tab().
            type(31162458)
        cy.wait(1000)
    })
}) //cierre de describe