
import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"
describe('Calendar test',()=>
    {before(function()
        {   cy.fixture('example').then(function(data)
          { 

           this.data=data
           
           })
       })
     
        it('Verify date selection',function(){
            const homePage = new HomePage();
            const productPage = new ProductPage();
            cy.visit(Cypress.env('url')+"/angularpractice/") 
            homePage.GetNameTextBox().type(this.data.name)
            homePage.GetGender().select(this.data.gender)

            //ASSERTIONS    
            homePage.GetNameTextBox().should('have.value',this.data.name) //validating text
            homePage.GetNameTextBox().should('have.attr','minlength','2') 
            homePage.GetRadioBtn().should('be.disabled')
            homePage.GetShopBtn().click()
           
           // cy.AddProduct('Blackberry')
            //cy.AddProduct('Nokia Edge')

            this.data.productNameList
            this.data.productNameList.forEach(function(element){
                cy.AddProduct(element)

                
            });

            productPage.getCheckoutBtn().click();
            var sum = 0
            productPage.getPriceList().each(($el,Index,$list)=>{
                const amnt = $el.text()
                var cut = amnt.split(" ")
                var price = cut[1].trim()
                sum = Number(sum) +Number(price)
            }).then(function(){
            cy.log(sum)})

            var totprice= productPage.getTotalPrice().then(function(getprice)
{var splited = getprice.text().split(" ")
            var totalAmount = splited[1].trim()
            cy.log(totalAmount)
            expect(Number(totalAmount)).to.equal(sum)
        })
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

    })