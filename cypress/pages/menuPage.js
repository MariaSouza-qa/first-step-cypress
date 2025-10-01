class MenuPage {
    selectorslist() {
              return {
            infoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        }
      accessMyInfo() {
        cy.get(this.selectorslist().infoButton).click()
      }
    }
    export default MenuPage
