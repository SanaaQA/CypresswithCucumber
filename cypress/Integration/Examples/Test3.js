describe('My Third Test', () => {
    it('Validates checkbox!', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')//single checkbox and multiple assertion
cy.get('#checkBoxOption1').uncheck().should('be.not.checked').and('have.value','option1')
cy.get('input[type="checkbox"]').check(['option2','option3'])//multiple checkbox

cy.get('#dropdown-class-example').select('option2').should('have.value',"option2")//static dropdown

cy.get('#autocomplete').type('Ind')//dynamic dropdown
cy.get(".ui-menu-item").each(($el,Index,$list) =>{
    if($el.text()==="India"){
        $el.click()
    }})
    cy.get('#displayed-text').should('be.visible')//show
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('be.not.visible')//hide

    cy.get('[for="radio2"] > .radioButton').check() //radio button

    })
    
})