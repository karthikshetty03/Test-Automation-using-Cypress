/// <reference types="cypress" />

describe("Testing cards on 'Students are Viewing' Panel", () => {
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
        if (i != 0) {
          cy.get(popup).should("not.exist");
        }

        cy.wait(2000);
        cy.get(`@course${i}`).trigger("mouseover");
        cy.wait(2000);

        if (i != 0) {
          cy.get(popup).should("exist").and("be.visible");

          //Card Components Testing
          cy.get(popup).within(() => {
            cy.get("[data-purpose = quick-view-box-title]")
              .should("exist")
              .and("be.visible");
            cy.get("div.course-details-quick-view-box--badge-container--1Qfpa")
              .should("exist")
              .and("be.visible");
            cy.get("span.course-details-quick-view-box--updated--2bmvS")
              .should("exist")
              .and("be.visible")
              .contains("Updated");
            cy.get("div.course-details-quick-view-box--stats--3pBYQ")
              .should("exist")
              .and("be.visible");
            cy.get("div.course-details-quick-view-box--headline--GZKCw")
              .should("exist")
              .and("be.visible");
            cy.get("div.course-details-quick-view-box--objectives--3WCDQ")
              .should("exist")
              .and("be.visible");
            cy.get("[data-purpose= quick-view-box-objective]")
              .should("exist")
              .and("be.visible")
              .and("have.length", 3);
            cy.get("[data-purpose=add-to-cart]")
              .should("exist")
              .and("be.visible");
            cy.get("[data-purpose= toggle-wishlist]")
              .should("exist")
              .and("be.visible");
          });
        }

        cy.get(`@course${i}`).trigger("mouseout");
        cy.wait(2000);

        if (i != 0) {
          cy.get(popup).should("not.exist");
        }

        if (i != 0 && i % 3 == 0) {
          cy.get(
            "#course-unit-container-Studentsareviewing + button + button"
          ).click();
        }
      }
    });
  });
});
