Cypress.Commands.add("VisitAndWait", () => {
  cy.visit("/");
  cy.wait(2000); //Time to ensure all xhr requests to complete, otherwise further tests can fail
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
