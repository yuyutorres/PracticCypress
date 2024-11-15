

/// <reference types="cypress" /> 
// sirve para validar q el titulo de la pagina o los campos de la interfaz existentes
// entre otros

describe("Introduccion a los assert ", () => {
    
    it (" Demo de los assert", () =>{
        cy.visit("https://opencart.abstracta.us/index.php?route=account/register")
        cy.title().should('eq', "Register Account")
        cy.wait(1500)
         
        cy.get("#input-firstname").should("be.visible").type("Yuyu")
        cy.wait(1500)

        cy.get("#input-lastname").should("be.visible").type("ToCu")
        cy.wait(1500)

        cy.get("#input-email").should("be.visible").should("be.enabled").type("yu@hotmail.com") 
            // "be.enabled" es para ver si el campo esta habilitado
        cy.wait(1500)

        
    })
}) //cierre de describe