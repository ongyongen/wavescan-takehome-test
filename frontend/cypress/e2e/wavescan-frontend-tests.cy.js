/// <reference types="cypress" />

describe('wavescan-e2e-tests', () => {
  beforeEach(() => {
    cy.visit('https://wavescan-frontend.netlify.app')
  })

  it('displays user input form by default', () => {
    cy.get("img").should("have.attr", "src").should('include','wavescan-logo')
    cy.get(".input-description").eq(0).should('have.text', "Project name")
    cy.get(".input-description").eq(1).should('have.text', "Scanning mode")
    cy.get(".input-description").eq(2).should('have.text', "Scan dimensions (cm)")
    cy.get(".input-description").eq(3).should('have.text', "x")
    cy.get(".input-description").eq(4).should('have.text', "y")
    cy.get(".input-description").eq(5).should('have.text', "Scanner Frequency (GHz)")
    cy.get("button").should('have.text', "SCAN")
  })

  it("Handles correct user form submission", () => {
    cy.get(".input-box").eq(0).type("project_name_test")
    cy.get(".input-box").eq(1).select("Auto")
    cy.get(".input-box").eq(2).type("10")
    cy.get(".input-box").eq(3).type("10")
    cy.get(".input-box").eq(4).type("10")
    cy.get("button").click()
    cy.contains("Scanned image")
  })

  it("Handles incorrect user form submission (wrong data values)", () => {
    cy.get(".input-box").eq(0).type("a")
    cy.get(".input-box").eq(1).select("Auto")
    cy.get(".input-box").eq(2).type("0")
    cy.get(".input-box").eq(3).type("0")
    cy.get(".input-box").eq(4).type("0")
    cy.get("button").click()
    cy.contains("Error!")
    cy.contains("Your form has not been submitted due to some errors. Please correct these errors below and submit your form again:")
    cy.contains("Project name has to be more than 3 characters")
    cy.contains("Item dimensions have to be more than 1 cm")
    cy.contains("Scanner frequency has to be more than 1 GHz")
  })

  it("Handles incorrect user form submission (wrong data type)", () => {
    cy.get(".input-box").eq(0).type("a")
    cy.get(".input-box").eq(1).select("Auto")
    cy.get(".input-box").eq(2).type("a")
    cy.get(".input-box").eq(3).type("b")
    cy.get(".input-box").eq(4).type("c")
    cy.get("button").click()
    cy.contains("Error!")
    cy.contains("Your form has not been submitted due to some errors. Please correct these errors below and submit your form again:")
    cy.contains("Please ensure you key in only numbers for scan dimensions and scan frequency fields")
  })
})
