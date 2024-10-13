describe('My Second Test', () => {
    it('Checkout product!', () => {
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
cy.get('.search-keyword').type('ca')
cy.wait(2000)

cy.get('.product:visible').should('have.length',4) //assertion
cy.get('.products').as('productlist') //alias helps to make locators reusaable
cy.get('@productlist').find('.product').each(($el,Index,$list) =>{

  const veg = $el.find('h4.product-name').text()
  if(veg.includes('Cashews'))
  {cy.wrap($el).find('button').click()}
}) 
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()



}) })