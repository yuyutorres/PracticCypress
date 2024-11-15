/// <reference types="cypress" /> 

describe(" checkbox", () => {

it (" Ejemplo test checkbox", () =>{
    cy.visit("https://getbootstrap.com/docs/5.3/forms/checks-radios/")
    cy.title().should('eq', "Checks and radios · Bootstrap v5.3").wait(1500)

   cy.get('#flexCheckDefault').check  ().should('be.checked').wait(1500) 
    // sino clickea colocar en .click({force:true})
    // para aasegurarnos q el checkbox se clickeo le colocamos .should('be.checked')
    
   cy.get('#flexCheckChecked').uncheck()
    // para desmarcar un checkbox marcado o clickcledo

  cy.get('#flexCheckDisabled').should('be.disabled')
    //validar q el checkbox no este habilitado hasta q el usuario meta alguna informacion en un formulario

})

}) //cierre de describe