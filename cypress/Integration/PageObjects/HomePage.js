
class HomePage{
GetNameTextBox()
{
    return cy.get("div[class='form-group'] input[name='name']")
}
GetGender(){
   return cy.get("select") 
}

GetRadioBtn()
{
    return   cy.get("input[id$='inlineRadio3']")
}

GetShopBtn(){
  return  cy.contains("Shop")
}
}
export default HomePage;