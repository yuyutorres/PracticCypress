

/// <reference types="cypress" /> 
require('cypress-xpath');


describe(" ", () => {

    it (" Selectores por Id ", () =>{ // desde consola o desde la interfaz desde cypress
        cy.visit( "https://demoqa.com/text-box")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)

        cy.get("#userName").should("be.visible").type ("Yuyu Torres")
        cy.get("#userEmail").should("be.visible").type("yu@gmail.com")
    })


    it (" Selectores por Atributos ", ()=>{  // por atributos es desde la inspeccion y para decir q 
        // es un atributo se coloca el placeholder dentro de [] y en comilla '' el full name 
        cy.visit( "https://demoqa.com/text-box")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000) 
        
        cy.get("[placeholder='Full Name']").should("be.visible").type("Eder Diaz")
    })


    it (" Selectores por Xpath ", ()=>{  
        // para utilizar Xpath cypress nos pide instalar el plugin https://www.npmjs.com/package/cypress-xpath 
        // desde la consola y para poderlo utlizar hay que utilizar  require('cypress-xpath');
        cy.visit( "https://demoqa.com/text-box")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000)

        cy.xpath("//*[@id='userName']").should("be.visible").type("Marbel Cuadrado")
        // inspecciona el elemento Full Name  y sobre el elemento inspeccionado seleccionado dar click derecho, copy y copy Xpath
        // corregir las comillas de userName por sencillas
        cy.xpath("//input[@id='userEmail']").should("be.visible").type("marbel@gmail.com")
        //       
    
    })


    it(" Selectores por contains ", ()=>{  //este selector por assert llamado contains valida si
        // el elemento tiene un contenido dentro o un texto 
        cy.visit( "https://demoqa.com/automation-practice-form")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1500) 
        
        cy.get(".custom-control-label").contains("Female").click()
        // se coloca el punto antes de custom porq es una clase
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Other").click()
    })
    
    

    it.only  (" Selectores por copySelector", ()=>{  
        cy.visit( "https://demoqa.com/automation-practice-form")
        cy.title().should('eq', "DEMOQA")
        cy.wait(1000) 
        
        cy.get("#userNumber").should("be.visible").type("31457961245")  // se inspecciona el elemnto y una vez inspeccionado 
        // le damos clic derecho, copy y copy selector

    })


 // solucion del error por compatibilidad de cypress con demoqa 
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress
            // inside the cy.origin() method from failing the test

            return false
        })
 
        
        
}) //cierre de describe