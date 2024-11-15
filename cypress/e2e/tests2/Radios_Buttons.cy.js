
/// <reference types="cypress" /> 

describe(" Radio_Buttons", () => {

    it (" Ejemplo test Radio_Buttons", () =>{
        cy.visit('https://getbootstrap.com/docs/5.3/forms/checks-radios/')

        cy.title().should('eq', 'Checks and radios · Bootstrap v5.3').wait(1500)
        
        cy.get('#flexRadioDefault1').check().should('be.checked').wait(1500)
        // .check() porq solo vamos a clickclear solo una opcion de varias q hay para escoger

        cy.get('#flexRadioDefault2').should('not.be.checked')
        //Validar q los otros radio_buttons no estan marcado porq solo se puede seleccionar uno
       // ('not.be.checked') para validae q no debe estar estar clickcledo 
       
       cy.get('#flexRadioDisabled').should('be.disabled')
       //validar q el radio_buttons esta desabilitado
    })
}) //cierre de describe