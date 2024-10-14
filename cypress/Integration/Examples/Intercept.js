describe('Altering the Library Data', () => {
    it('Does Verify the alert for a single Data case!', () => {
cy.visit("https://rahulshettyacademy.com/angularAppdemo/") 

cy.intercept({method:"GET",url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"},{StatusCode:"200",
    body:[{
        "book_name": "RestAssured with Java",
        "isbn": "BSG",
        "aisle": "2302"
    }]
}).as('bookRetrivals')
cy.get('.btn.btn-primary').click()
cy.wait('@bookRetrivals')
cy.get('p').should('have.text','Oops only 1 Book available')


    })
})