
/* https://federico-toledo.com/sitios-de-prueba-para-practicar/  link para practicar QA
 https://opencart.abstracta.us/ 
https://mismascotas.vet/store
*/

//npx cypress open ==> codigo para correr cypress por consola 

/// <reference types="cypress" /> 

describe(" Validando titulo", () => {

/* it("Primer test -> Hola proyecto", () => {
    cy.log("Hola proyecto")
    cy.wait(1500)
    })
*/

/* it(" test 2 -> full name", ()=>{
      cy.visit("https://opencart.abstracta.us/")
      cy.get(".form-control.input-lg").type("tablets")
      cy.get(".btn.btn-default.btn-lg").click()
      cy.wait(1500)
  
    })
*/

  it("test 3 => sing up (registers)", () => {
    cy.visit("https://opencart.abstracta.us/index.php?route=account/register")

    cy.wait(1500)
    cy.get("#input-firstname").type("Yulieth")
    cy.wait(1500)
    cy.get("#input-lastname").type("Torres")
    cy.get("#input-email").type("yyto_@hotmail.com")
    cy.wait(1500)
    cy.get("#input-telephone").type("3257854")
    cy.get("#input-password").type("****")
    cy.get("#input-confirm").type("****")
  })


  /* it ("test 4 Validad el titulo", () =>{
      cy.visit("https://mismascotas.vet/store ")
      cy.title().should('eq', "Clinica Veterinaria Mis Mascotas")
      cy.log("Ok la funcion title funciono bien")
    })
*/
}) //cierre de describe


