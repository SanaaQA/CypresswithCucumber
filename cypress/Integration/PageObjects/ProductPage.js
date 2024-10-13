class ProductPage{
getCheckoutBtn(){
    return cy.get(".nav-link.btn.btn-primary")
}

getFinalCheckoutBtn(){
    return cy.contains("Checkout")
}

getCountryName(){
    return cy.get("#country")
}

getCountryClick(){

    return cy.get('.suggestions > ul > li > a')
}
getCheckbox(){
    return cy.get("label[for='checkbox2']")
}
getPurchaseBtn(){
    return cy.contains("Purchase")
}
getSuccessmsg(){
    return cy.get(".alert.alert-success.alert-dismissible")
}

getPriceList(){
    return cy.get("tr td:nth-child(4) strong")
}

getTotalPrice(){
    return cy.get("td[class='text-right'] h3 strong")
}
}

export default ProductPage;