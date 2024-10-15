describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (reqUrl)=>
    {
        reqUrl.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
        reqUrl.continue((RestrictedAuthor)=> { expect(RestrictedAuthor.statusCode).to.equal(403) })
    }).as("Author2Url")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@Author2Url')
 
})
 
})
 