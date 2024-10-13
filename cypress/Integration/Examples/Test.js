describe('My First Test', () => {
    it('Does not do much!', () => {
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
cy.get('.search-keyword').type('ca')
cy.wait(2000)

cy.get('.product:visible').should('have.length',4) //assertion
cy.get('.products').as('productlist') //alias helps to make locators reusaable
cy.get('@productlist').find('.product').eq(2).contains("ADD TO CART").click() //to select second index in an array
cy.get('@productlist').find('.product').each(($el,Index,$list) =>{

  const veg = $el.find('h4.product-name').text()
  if(veg.includes('Cashews'))
  {cy.wrap($el).find('button').click()}

})
cy.get('.brand').should('have.text',('GREENKART'))//assertion here no need to worry about text is not having then because should will handle 
cy.get('.brand').then(function(logo){
cy.log(logo.text());})//.text is not a cypress function so we need to handle manually using then

    })
  })