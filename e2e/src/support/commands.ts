// tslint:disable-next-line:no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    getE2EAttribute: typeof getE2EAttribute;
    login: typeof login;
  }
}

Cypress.Commands.add('getE2EAttribute', getE2EAttribute);
Cypress.Commands.add('login', login);

function getE2EAttribute(testSelector: string, nestedSelector?: string): Cypress.Chainable<JQuery> {
  return cy.get(`[data-e2e=${testSelector}] ${nestedSelector ? nestedSelector : ''}`);
}

function login(): void {
  cy.visit('/');
}
