describe('Login Form', () => {
    it('allows a user to log in', () => {
      cy.visit('/login');
  
      cy.get('input[name=email]').type('test@example.com');
      cy.get('input[name=password]').type('password');
      cy.get('button[type=submit]').click();
  
      // בדיקה שהמשתמש מנותב לעמוד הבית לאחר ההתחברות
      cy.url().should('include', '/');
    });
  });
  