import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage'
import LoginPage from '../pages/loginPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
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
  it('User Info Update - Success', () => {
   loginPage.accessLoginPage()
   loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
  
   dashboardPage.checkDashboardPage()

   menuPage.accessMyInfo()

   myInfoPage.fillPersonalDetails(chance.first(),chance.letter({casing: 'upper'}) , chance.last())
   myInfoPage.fillEmployeeDetails('123456','OtherId','123456','2015-02-01')
   myInfoPage.fillStatus('Brazilian', 'Married')
   myInfoPage.saveForm() 

  })
})