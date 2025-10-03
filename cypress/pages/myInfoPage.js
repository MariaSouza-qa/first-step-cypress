class MyInfoPage {
    selectorsList() {
           return {
              FirstNameField: '[name="firstName"]',
              LastNameField: '[name="lastName"]',
              MidleNameField: '[name="middleName"]',
              genericField:'.oxd-input--active',
              dateField: '[placeholder="yyyy-dd-mm"]',
              dateCloseButton: '.--close',
              saveButton: '.orangehrm-left-space',
              checkBox: '.oxd-select-text'

        }
    }
    fillPersonalDetails (firstName,middleName,lastName) {
         cy.get(this.selectorsList().FirstNameField).clear()
         cy.get(this.selectorsList().FirstNameField).type(firstName)
         cy.get(this.selectorsList().LastNameField).clear().type(lastName)
         cy.get(this.selectorsList().MidleNameField).clear().type(middleName)
    }
    fillEmployeeDetails(employeeId,otherId,driversLicenseNumber,driversLicenseDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    saveForm() {
       cy.get(this.selectorsList().saveButton).eq(0).click()
       cy.get('body').should('contain','Successfully Updated')
    }
    fillStatus(nationality,status) {
        cy.get(this.selectorsList().checkBox).eq(0).click()
        cy.contains('.oxd-select-dropdown .oxd-select-option', nationality).click()
        cy.get(this.selectorsList().checkBox).eq(1).click()
        cy.contains('.oxd-select-dropdown .oxd-select-option', status).click()

    }
}
export default MyInfoPage