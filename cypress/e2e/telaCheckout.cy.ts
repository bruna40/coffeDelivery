describe('Test page checkout', () => {
  beforeEach(() => {
    cy.getPageCheckout()
    cy.viewport(1400, 720)
  })

  it('should have render the page', () => {
    cy.getByData('checkout').should('exist')
  })

  it('should complete the checkout', () => {
    cy.getByData('cep-input').should('exist')
    cy.getByData('cep-input').type('12345678')

    cy.getByData('street-input').should('exist')
    cy.getByData('street-input').type('Rua do teste')

    cy.getByData('number-input').should('exist')
    cy.getByData('number-input').type('123')

    cy.getByData('neighborhood-input').should('exist')
    cy.getByData('neighborhood-input').type('Bairro do teste')

    cy.getByData('city-input').should('exist')
    cy.getByData('city-input').type('Cidade do teste')

    cy.getByData('state-input').should('exist')
    cy.getByData('state-input').type('st')

    cy.getByData('payment-method-credit').click({ force: true })

    cy.getByData('finish-order').click()

    cy.getByData('order-sucess').should('exist')
  })
})
