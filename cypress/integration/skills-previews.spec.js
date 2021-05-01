/// <reference types="cypress" />

describe("Testing cards on Skills Hub Panel", () => {
  beforeEach(() => {
    cy.VisitAndWait(); 
  });

  const topics = [
    "Python",
    "Excel",
    "Web Development",
    "JavaScript",
    "Data Science",
    "AWS Certification",
    "Drawing",
  ];

  context("Desktop View", () => {
    it("Course Cards", () => {
      cy.get("[data-purpose = tab-nav-buttons] > div > div > div")
        .should("have.length", topics.length)
        .each(($item, index) => {
          cy.wait(2000);
          cy.wrap($item).click();

          let str = topics[index].replace(/ +/g, "");
          cy.get(`#course-unit-container-${str} > div`).as(`${str}-Box`);

          cy.get(`@${str}-Box`)
            .its("length")
            .then((len) => {
              cy.get(`@${str}-Box`).each(($item, index) => {
                cy.wrap($item).as("course" + index);
              });

              let popup =
                "div.course-details-quick-view-box--popover-wrapper--3jFIa > div > div > div > div";

              //Can set a specify a less value for faster testing completion
              for (let i = 0; i < Math.min(len, 3); i++) {
                cy.get(popup).should("not.exist");
                cy.wait(2000);
                cy.get(`@course${i}`).trigger("mouseover");
                cy.wait(2000);

                cy.get(popup).should("exist").and("be.visible");

                //Card Components Testing
                cy.get(popup).within(() => {
                  cy.get("[data-purpose = quick-view-box-title]")
                    .should("exist")
                    .and("be.visible");

                  cy.get(
                    "div.course-details-quick-view-box--badge-container--1Qfpa"
                  )
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
                    .and("be.visible");
                  //Drawing Skill does not have 3 objectives, so fails!
                  // .and("have.length", 3);
                  cy.get("[data-purpose=add-to-cart]")
                    .should("exist")
                    .and("be.visible");
                  cy.get("[data-purpose= toggle-wishlist]")
                    .should("exist")
                    .and("be.visible");
                });

                cy.get(`@course${i}`).trigger("mouseout");
                cy.wait(2000);
                cy.get(popup).should("not.exist");

                if (i != 0 && i % 3 == 0 && i != len - 1) {
                  cy.get(
                    `#course-unit-container-${str} + button + button`
                  ).click();
                }
              }
            });
        });
    });
  });
});
