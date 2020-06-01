import { getPageTitle } from '../support/app.po';

describe('Kickstand', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getPageTitle().contains('Kickstand app is running!');
  });
});
