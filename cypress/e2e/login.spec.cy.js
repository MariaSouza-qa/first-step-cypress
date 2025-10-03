import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

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

   myInfoPage.fillPersonalDetails('FirstName', 'LastName', 'MiddleName')
   myInfoPage.fillEmployeeDetails('EmployeeId','OtherId','123456','2025-01-02')
   myInfoPage.fillStatus('Brazilian', 'Married')
   myInfoPage.saveForm()
  
   
    
    
    
   
  })
  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.LoginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
   
  })
})