describe('My Forth Test', () => {
    it('Validates Alert !', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
cy.on('window:alert', (str) => {
    expect(str).to.equal("Hello , share this practice page and share your knowledge") // This should fail since the message is likely different
})
cy.get('#alertbtn').click()

// Set up the confirm listener before clicking the confirm button
cy.on('window:confirm', (str) => {
    expect(str).to.equal("Hello , Are you sure you want to confirm?") // This should fail since the message is likely different
})
cy.get('#confirmbtn').click()

    
    })
    
})