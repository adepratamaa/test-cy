describe('example to-do app', () => {
    
  before(function () {
      cy.visit('https://flip.id/')
      cy.location('pathname').should('eq', '/landing');
    })  
    //https://hcaptcha.com/checksiteconfig?v=597d171&host=support.flip.id&sitekey=33f96e6a-38cd-421b-bb68-7806e1764460&sc=1&swa=1'
  //https://support.flip.id/cdn-cgi/challenge-platform/h/b/flow/ov1/0.7421562508484599:1648051820:37e09af60523e6b7173061207c7bf1234aba5e19c738dca10fc8f03d003a412d/6f08b9e11a4c355b/40a6ef0d1851ba3
    // it('Switch the language should be success', function () {
    //   cy.get('.jhfOdj').click()
    //   cy.get('.navbar-nav > .nav-item > .sc-hZSUBg > .sc-bAeIUo > .sc-cMhqgX').click()
    //   cy.get('[value="en"]').click()
    //   cy.get('h2:nth-child(1)').should('contain', 'Hello there!')
    // });

      it('Search for “e-Wallet”, then find out the supported e-Wallets and make sure OVO, DANA, Gopay, and Shopeepay are shown', function () {
        // cy.visit('https://flip.id/')
        // cy.location('pathname').should('eq', '/landing');

           // cy.wait(10000);
        // cy.intercept({method: 'GET', 
        // url: 'https://hcaptcha.com/checksiteconfig?v=597d171&host=support.flip.id&sitekey=33f96e6a-38cd-421b-bb68-7806e1764460&sc=1&swa=1'}).as('helpUrl')
        // cy.wait('@helpUrl');
          cy.get(':nth-child(2) > iframe')
            .then($iframe => {
              const $body = $iframe.contents().find('body');
              cy.wrap($body)
                .find('#checkbox')
                .should('be.disabled')
                .click()
            });
        // cy.visit('https://flipid.zendesk.com', {failOnStatusCode: false})

           
              // cy.get(':nth-child(2) > iframe')
              //   .first()
              //   .then((recaptchaIframe) => {
              //     const body = recaptchaIframe.contents()
              //     cy.wrap(body).find('#checkbox').should('be.visible').click()
              //   })

        // cy.request({
        //   method: 'POST',
          // headers: Headers.createNewCoreHeader({
          //   requestMethod: 'POST',
          //   requestBody: eStatementBody,
          //   route: SAVE_FINANCIAL_INFORMATION_URL,
          //   accessToken
          // }),
        //   url: 'https://support.flip.id/hc/activity',
        // }).then((response) => {
        //   result.push({
        //     status: response.status,
        //     message: response.body.meta.message
        //   });
        // });
          
          
        });
  
      // return result;
    
        // cy.wait(5000)
        // cy.intercept({method: 'GET', url: 'https://support.flip.id/cdn-cgi/challenge-platform/h/b/flow/ov1/0.14222574801822738:1648048294:c3eb9559338e5f9059b28ded087eba46dd08dfdb6248964d0b450c18b5b3baf3/6f0894bdad4a35af/42da87343ac02ed'}).as('helpUrl')
        // cy.wait('@helpUrl');
        // cy.visit('https://flipid.zendesk.com/')
  })