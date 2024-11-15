

/// <reference types="cypress" /> 

// only es solo para poner a correr esta prueba

describe(" Opciones de click", () => {

    it.only (" Click sencillo", () =>{
        cy.visit("https://mismascotas.vet/store ")
        cy.title().should('eq', "Clinica Veterinaria Mis Mascotas")
        cy.visit("https://mismascotas.vet/auth/identifier")
        cy.wait(1500)

        cy.get("#username").type("Yuyu")
        cy.wait(1500)
        cy.get(".d-grid > .btn").should("be.visible").click() 
        // .d-grid > .btn el valor deeste elemento lo sacamos desde donde se corre cypress   
 })    // dandole click en el boton siguiente y luego en el boton q esta al lado de la url desde donde 
       // se corre cypress

  it("Click force true", () => {  //click forzado
        cy.visit("https://mismascotas.vet/store ")
        cy.title().should('eq', "Clinica Veterinaria Mis Mascotas")
        cy.visit("https://mismascotas.vet/auth/identifier")
        cy.wait(1500)

        cy.get("#username").type("Yuyu")
        cy.wait(1500)
        cy.get(".d-grid > .btn").should("be.visible").click({force: true})

 })

}) //cierre de describe