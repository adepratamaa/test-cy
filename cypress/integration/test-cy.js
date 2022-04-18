describe('Flip-id', () => {

  beforeEach(function () {
      cy.visit('https://flip.id/')
      cy.location('pathname').should('eq', '/landing');
    })  
    it('Find how flip generates revenue then should be find out', function () {
      cy.get('.sc-fgfRvd > .sc-kPVwWT').click()
      cy.get('.sc-kQsIoO > .sc-jrIrqw').should('contain', 'Flip mendapatkan pemasukan dari layanan Flip+, Flip for Business, serta penjualan produk digital (pulsa, paket data, token listrik).')
      });
    it('Switch the language then should be success', function () {
      cy.get('.jhfOdj').click()
      cy.get('.navbar-nav > .nav-item > .sc-hZSUBg > .sc-bAeIUo > .sc-cMhqgX').click()
      cy.get('[value="en"]').click()
      cy.get('h2:nth-child(1)').should('contain', 'Hello there!')
    });
    it('Search for supported “e-Wallet” then should be find out', function () {
      cy.get(':nth-child(2) > :nth-child(1) > div > svg').click()
      cy.get('.dXRySY > .collapse > span').should('contain', 'Yup! Tidak hanya transfer uang antarbank, kamu juga dapat melakukan top-up e-wallet seperti DANA, OVO, GoPay, dan ShopeePay di Flip dengan biaya lebih terjangkau. Asyiknya lagi, kamu tidak dikenakan potongan biaya saat mengisi sebagian besar e-wallet ini saat top-up di Flip, lho!')
      });
    });