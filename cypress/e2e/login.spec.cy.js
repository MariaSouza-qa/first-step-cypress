import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {

  FirstNameField: '[name="firstName"]',
  LastNameField: '[name="lastName"]',
  MidleNameField: '[name="middleName"]',
  genericField:'.oxd-input--active',
  dateField: '[placeholder="yyyy-dd-mm"]',
  dateCloseButton: '.--close',
  saveButton: '.orangehrm-left-space',
  checkBox: '.oxd-select-text'

}
  it.only('User Info Update - Success', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
  
   dashboardPage.checkDashboardPage()

   menuPage.accessMyInfo()
  
    cy.get(selectorsList.FirstNameField).clear()
    cy.get(selectorsList.FirstNameField).type('Jungkook')
    cy.get(selectorsList.LastNameField).clear().type('Jeon')
    cy.get(selectorsList.MidleNameField).clear().type('Kim')
    cy.get(selectorsList.genericField).eq(3).clear().type('test')
    cy.get(selectorsList.genericField).eq(4).clear().type('test')
    cy.get(selectorsList.genericField).eq(5).clear().type('test')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-05-13')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
    cy.get(selectorsList.checkBox).eq(0).click()
    cy.contains('.oxd-select-dropdown .oxd-select-option', 'Brazilian').click()
    cy.get(selectorsList.checkBox).eq(1).click()
    cy.contains('.oxd-select-dropdown .oxd-select-option', 'Single').click()

    
   
  })
  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.LoginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
   
  })
})