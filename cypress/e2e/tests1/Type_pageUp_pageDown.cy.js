


/// <reference types="cypress" /> 
    // Type pageUp, pageDown y Only

describe(" Ejemplo de Type pageUp, pageDown y Only", () => {
    
    // para hacer scroll (desplazarte)hacia abajo y hacia arriba en la pagina
    // .only es solo para probar esa funcion 

    it ("type pageUp ", () =>{
        cy.visit("https://mismascotas.vet/store ")
        cy.title().should('eq', "Clinica Veterinaria Mis Mascotas")
        cy.wait(1000)

        cy.get("body > div.container-fluid > div.primary-bg-color.row.p-4.text-center > div:nth-child(3) > div > div:nth-child(1) > a ").click()
        cy.get("#username").type('{pageUp}')
        cy.wait(1000)
    })

    it.only ("type pageDown ", () =>{
        cy.visit("https://mismascotas.vet/store ")
        cy.title().should('eq', "Clinica Veterinaria Mis Mascotas")
        cy.wait(1500)

        cy.get("body > div.container-fluid > div.primary-bg-color.row.p-4.text-center > div:nth-child(3) > div > div:nth-child(1) > a ").click()
        cy.get("#username").type('{pageDown}')
        cy.wait(1000)
    })

 }) //cierre de describe
  