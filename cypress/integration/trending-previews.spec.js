/// <reference types="cypress" />

describe("Intercept Requests on 'Students are Viewing' Panel", () => {
  beforeEach(() => {
    cy.VisitAndWait();
  });

  context("Desktop View", () => {
    it("Course Cards", () => {
      for (let i = 0; i < 18; i++) {
        cy.get(
          `#course-unit-container-Studentsareviewing > [data-index = ${i}]`
        ).as("course" + i);
      }

      let popup =
        "div.course-details-quick-view-box--popover-wrapper--3jFIa > div > div > div > div";

      for (let i = 0; i < 18; i++) {
        if (i != 0) cy.get(popup).should("not.exist");
        cy.wait(2000);
        cy.get(`@course${i}`).trigger("mouseover");
        cy.wait(2000);
        if (i != 0) cy.get(popup).should("exist").and("be.visible");
        cy.get(`@course${i}`).trigger("mouseout");
        cy.wait(2000);

        if (i != 0 && i % 3 == 0) {
          cy.get(
            "#course-unit-container-Studentsareviewing + button + button"
          ).click();
        }
      }
    });
  });
});
