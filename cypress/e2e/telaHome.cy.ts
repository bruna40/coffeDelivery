describe('Test page Home', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.viewport(1400, 720)
  })

  it('should have render the page', () => {
    cy.getByData('home').should('exist')
  })

  it('should have a title', () => {
    cy.getByData('title').should(
      'have.text',
      'Encontre o café perfeito para qualquer hora do dia',
    )
  })

  it('should render some cards', () => {
    cy.getByData('Latte').should('exist')
    cy.getByData('Cubano').should('exist')
    cy.getByData('Capuccino').should('exist')
  })

  it('should  put Latte in cart', () => {
    cy.getByData('Latte').should('exist')
    cy.wait(2000)
    cy.getByData('max-5').click()
    cy.getByData('Latte').getByData('quanty-5').should('have.text', '2')
    cy.getByData('cart-button-5').click()
    cy.wait(2000)
    cy.getByData('cart-length').should('have.text', '1')
  })

  it('should  put more coffee in cart', () => {
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
  })

  it('should the button cart disabled', () => {
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
})
