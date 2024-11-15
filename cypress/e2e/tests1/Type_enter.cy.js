
///<reference types ="cypress" /> 

describe(" Funciones para Type ", () => {
    // enter y click

    it(" type ", () => {
        cy.visit(" https://www.google.com/ ")
        cy.title().should('eq', "Google")
        cy.wait(1500)



        cy.get("[name='q']").type("cypress io {enter}") // get --> conseguir o buscar 
        // para buscar en el navegador de google cypress io y enter
        cy.wait(1500)

        cy.origin('https://www.cypress.io', () => {
        //cy.on('uncaught:exception', (e) => {

        // we expected this error, so let's ignore it
        // and let the test continue
        //return false
        // })
        })
        
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > div > span > a").click()
        // inspeccionar la direccion de enlace desde las pruebas cypress para copiar la clase como un selector asi--> copy --> copy selector
    })
}) //cierre de describe