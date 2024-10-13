
describe('My seventh Test', () => {
    it('Validates mousehover  !', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

//no direct function to handle mousehover but we can use show method inside jquery

//cy.get('.mouse-hover-content').invoke('show')
//cy.contains('Top').click()

//or we can use force to show hidden things
cy.contains('Top').click({force: true})

cy.url().should('include','top')



    })
})
