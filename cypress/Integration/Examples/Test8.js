describe('My seventh Test', () => {
    it('Validates mousehover  !', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
  cy.get("#opentab").then(function(el)
{
const url = el.prop('href')
cy.visit(url)
cy.origin(url, ()=>
{
    cy.contains("About us").click()
})
})


})
})