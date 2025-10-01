class DashboardPage {
    selectorsList() {
        return {
            sectionTittleTopbar: '.oxd-topbar-header-title',
            dashboardGrid:'.orangehrm-dashboard-grid',
        
        }
    }
    checkDashboardPage() {
       cy.location('pathname').should('equal','/web/index.php/dashboard/index')
       cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage