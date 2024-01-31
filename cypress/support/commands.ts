/// <reference types="cypress" />
// ***********************************************

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('getPageCheckout', () => {
  cy.visit('/')
  cy.getByData('Latte').should('exist')
  cy.getByData('Macchiato').should('exist')
  cy.getByData('Mocaccino').should('exist')
  cy.wait(2000)
  cy.getByData('max-5').click()
  cy.getByData('Latte').getByData('quanty-5').should('have.text', '2')
  cy.getByData('cart-button-5').click()
  cy.wait(2000)
  cy.getByData('max-7').click()
  cy.getByData('Latte').getByData('quanty-5').should('have.text', '2')
  cy.getByData('cart-button-7').click()
  cy.wait(2000)
  cy.getByData('max-12').click()
  cy.getByData('Latte').getByData('quanty-5').should('have.text', '2')
  cy.getByData('cart-button-12').click()
  cy.wait(2000)
  cy.getByData('cart-length').should('have.text', '3')

  cy.getByData('cart-button-header').click()
  cy.visit('/checkout')
})
