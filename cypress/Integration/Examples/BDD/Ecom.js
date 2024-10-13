import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homePage = new HomePage();
const productPage = new ProductPage();
Given('I open webpage',function()
{
    
    cy.visit(Cypress.env('url')+"/angularpractice/") 

})

When('I add items to the cart ',function(){
    homePage.GetShopBtn().click()

     this.data.productNameList
     this.data.productNameList.forEach(function(element){
     cy.AddProduct(element)
})

})

And('Validate the price',function(){

    productPage.getCheckoutBtn().click();
    var sum = 0
    productPage.getPriceList().each(($el,Index,$list)=>{
        const amnt = $el.text()
        var cut = amnt.split(" ")
        var price = cut[1].trim()
    sum = Number(sum) +Number(price)}).then(function(){
    cy.log(sum)})

    var totprice= productPage.getTotalPrice().then(function(getprice)
{       var splited = getprice.text().split(" ")
        var totalAmount = splited[1].trim()
        cy.log(totalAmount)
    expect(Number(totalAmount)).to.equal(sum)

})
})

Then('select the country and verify success msg',function(){

    productPage.getFinalCheckoutBtn().click();
    productPage.getCountryName().type(this.data.country)
    cy.wait(5000)      
    productPage.getCountryClick().click()
    productPage.getCheckbox().click()
    productPage.getPurchaseBtn().click()

    cy.get(".alert.alert-success.alert-dismissible").then(function(validate)
{
    const actualText = validate.text()
    expect(actualText.includes("Success")).to.be.true //use instead if condition
})

})



     When ('I fill the form details',function(){
        homePage.GetNameTextBox().type(this.data.name)
        homePage.GetGender().select(this.data.gender)
        
     })
     Then ('I Validate form behavior',function(){
        homePage.GetNameTextBox().should('have.value',this.data.name) //validating text
        homePage.GetNameTextBox().should('have.attr','minlength','2') 
        homePage.GetRadioBtn().should('be.disabled')
     })
     And ('Click shop icon',function(){
        homePage.GetShopBtn().click()

     })