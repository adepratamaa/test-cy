describe('example to-do app', () => {
    before(() => {
      cy.visit('https://flip.id/')
    })  
  
    it('go to help', () => {
        cy.get(':nth-child(5) > .sc-gZMcBi').click()
        cy.intercept({method: 'GET', url: 'https://hcaptcha.com/checksiteconfig?v=597d171&host=support.flip.id&sitekey=33f96e6a-38cd-421b-bb68-7806e1764460&sc=1&swa=1'}).as('helpUrl')
        cy.wait('@helpUrl');
        cy.get(':nth-child(2) > iframe').click()
    })
  
    // it('can add new todo items', () => {
     
    //   const newItem = 'Feed the cat'
    //   cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    //   cy.get('.todo-list li')
    //     .should('have.length', 3)
    //     .last()
    //     .should('have.text', newItem)
    // })
  
    // it('can check off an item as completed', () => {
    //   cy.contains('Pay electric bill')
    //     .parent()
    //     .find('input[type=checkbox]')
    //     .check()
    //   cy.contains('Pay electric bill')
    //     .parents('li')
    //     .should('have.class', 'completed')
    // })
  
    // context('with a checked task', () => {
    //   beforeEach(() => {
    //     cy.contains('Pay electric bill')
    //       .parent()
    //       .find('input[type=checkbox]')
    //       .check()
    //   })
  
    //   it('can filter for uncompleted tasks', () => {
    //     cy.contains('Active').click()
    //     cy.get('.todo-list li')
    //       .should('have.length', 1)
    //       .first()
    //       .should('have.text', 'Walk the dog')
    //     cy.contains('Pay electric bill').should('not.exist')
    //   })
  
    //   it('can filter for completed tasks', () => {
    //     // We can perform similar steps as the test above to ensure
    //     // that only completed tasks are shown
    //     cy.contains('Completed').click()
  
    //     cy.get('.todo-list li')
    //       .should('have.length', 1)
    //       .first()
    //       .should('have.text', 'Pay electric bill')
  
    //     cy.contains('Walk the dog').should('not.exist')
    //   })
  
    //   it('can delete all completed tasks', () => {
    //     // First, let's click the "Clear completed" button
    //     // `contains` is actually serving two purposes here.
    //     // First, it's ensuring that the button exists within the dom.
    //     // This button only appears when at least one task is checked
    //     // so this command is implicitly verifying that it does exist.
    //     // Second, it selects the button so we can click it.
    //     cy.contains('Clear completed').click()
  
    //     // Then we can make sure that there is only one element
    //     // in the list and our element does not exist
    //     cy.get('.todo-list li')
    //       .should('have.length', 1)
    //       .should('not.have.text', 'Pay electric bill')
  
    //     // Finally, make sure that the clear button no longer exists.
    //     cy.contains('Clear completed').should('not.exist')
    //   })
  })