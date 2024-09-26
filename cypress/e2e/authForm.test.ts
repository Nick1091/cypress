describe('Authentication Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display welcome message on valid login', () => {
    cy.get('input[id="username"]').type('user');
    cy.get('input[id="password"]').type('pass');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome!').should('be.visible');
    cy.wait(500);
  });

  it('should display invalid credentials message on invalid login', () => {
    cy.get('input[id="username"]').type('wrongUserrrr');
    cy.get('input[id="password"]').type('wrongPasswww');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials').should('be.visible');
  });
});
