describe('My Fifth Test', () => {
    it('Validates web tables  !', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 

//get a common locator
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 

    //iterate and check which course contains value python
    const text=$e1.text()
    if(text.includes("Python"))
    {
 //for next to work, it needs get function so revoking again and for getting the text, we need then 
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
         const priceText=   price.text()
         expect(priceText).to.equal('25')
        })
    }
 
})
 
 
})
 
 
})
 
 
 
 
 
 
 
 
 