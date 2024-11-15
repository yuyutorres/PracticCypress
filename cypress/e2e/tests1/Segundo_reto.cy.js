
/// <reference types="cypress" /> 
require('cypress-xpath');


describe("Segundo Reto", () => {

 it("Probando la app", () => {
    cy.visit("https://computer-database.gatling.io/computers")
    cy.title().should('eq', "Computers database")
    cy.wait(1500)

    //buscando
    cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("Dell Vostro")
    /* al probar por xpath hay q agregar la libreria require('cypress-xpath');
      podemos hacerlo por xpath o get */
    cy.get("#searchsubmit").should("be.visible").click()
    
    // add
    cy.get("#add").should("be.visible").click()
    cy.get("#name").should("be.visible").type("Cypress")
    cy.get("#introduced").should("be.visible").type("2023-11-11")
    cy.get("#discontinued").should("be.visible").type("2024-11-11")
    //combo
    cy.get("#company").should("be.visible").select("Nokia").should("have.value", "16").wait(1500) // el select se saca al inspeccionar y el
    // numero 16 es el valor de nokia  
    cy.get(".primary").should("be.visible").click()  
    cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("Cypress")
    cy.get("#searchsubmit").should("be.visible").click()

 }) 
}) 