
/*
 https://demoqa.com/
    elementos
    tablas web
*/

/// <reference types="cypress" /> 
require('cypress-plugin-tab')

describe("Primer Reto ", () => {

    it(" ", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1500)

        // Buscar un usuario  en este caso es Alden y luego limpiar el buscador
        cy.get("#searchBox").should("be.visible").type("Alden")
        cy.wait(1500)
        cy.get("#searchBox").should("be.visible").clear()

        // agregando campo en la interfaz desde las pruebas en cypress
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1500)
        cy.get("#firstName").should("be.visible").
        type("Eder").tab().
        type("Diaz").tab().
        type("ed_@hotmail.com").tab().
        type("33").tab().
        type("15000000").tab().
        type("Sistemas").tab()
        cy.get("#submit").should("be.visible").click()

        // Editar un campo
        // inspeccionamos el boton editar desde la intefaz en la web
        cy.get("#edit-record-3").should("be.visible").click()
        cy.wait(1500)
        cy.get("#age").should("be.visible").clear().type("40")
        cy.wait(1500)
        cy.get("#salary").should("be.visible").clear().type("5000")
        cy.get("#submit").should("be.visible").click()

        //Borrando el campo inspeccionando el boton eliminar desd la intefaz
        cy.get("#delete-record-1").should("be.visible").click()
    })

    // solucion del error por compatibilidad de cypress con demoqa 
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress
        // inside the cy.origin() method from failing the test

        return false

    })

}) //cierre de describe