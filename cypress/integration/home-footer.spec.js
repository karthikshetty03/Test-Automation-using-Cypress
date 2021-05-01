/// <reference types="cypress" />

describe("Check Footer of Udemy's home page", () => {
  beforeEach(() => {
    cy.VisitAndWait();
  });

  context("Desktop View", () => {
    it("Checks 'Teach on Udemy' Box", () => {
      cy.get("div.teach-on-udemy-non-student-cta-wrapper > div > div > div")
        .should("exist")
        .and("be.visible")
        .within(() => {
          //Image
          cy.get("img")
            .should("exist")
            .and("be.visible")
            .and("have.attr", "src");

          //Details Section
          cy.get("div.non-student-cta")
            .should("exist")
            .and("be.visible")
            .within(() => {
              cy.get("h3")
                .should("exist")
                .and("be.visible")
                .and("have.text", "Become an instructor");
              cy.get("p").should("exist").and("be.visible");
              cy.get("div > a")
                .should("exist")
                .and("be.visible")
                .contains("Start teaching today")
                .click();
              cy.wait(1000);

              cy.go("back");
            });
        });
    });

    it("Checks 'Udemy for Business' box", () => {
      cy.get("div.ufb-non-student-cta-wrapper > div > div > div")
        .should("exist")
        .and("be.visible")
        .within(() => {
          //Image
          cy.get("img")
            .should("exist")
            .and("be.visible")
            .and("have.attr", "src");

          //Details Section
          cy.get("div.non-student-cta")
            .should("exist")
            .and("be.visible")
            .within(() => {
              cy.get("h3")
                .should("exist")
                .and("be.visible")
                .and("have.text", "Udemy for Business");
              cy.get("p").should("exist").and("be.visible");
              cy.get("div > a")
                .should("exist")
                .and("be.visible")
                .contains("Get Udemy for Business");
              // .click(); //CORS Blocking, test will fail!
              // cy.wait(1000);
              // cy.go("back");
            });
        });
    });

    it("Checks User stories panel", () => {
      cy.get("[data-purpose = user-stories]").within(() => {
        //VIdeo
        cy.get("div.user-stories--media-container--1DD4K")
          .should("exist")
          .and("be.visible");

        //Story
        cy.get("div.user-stories--story-text--MSW9Q").within(() => {
          //Story-title
          cy.get("[data-purpose = story-title]")
            .should("exist")
            .and("be.visible");

          //Story-Content
          cy.get("[data-purpose = story-content]")
            .should("exist")
            .and("be.visible");
        });
      });
    });

    it("Bottomost Panel (Links, Language, Logo and Copyright)", () => {
      cy.get("div.footer-section-main").within(() => {
        //Links and Language
        cy.get("div.links-and-locale").within(() => {
          //Links
          cy.get("ul.unstyled-list").should("have.length", 4);

          //Language
          cy.get("ul.locale-select--language-list--2OB0j").should(
            "not.be.visible"
          );
          cy.get("button").click();
          cy.get("ul.locale-select--language-list--2OB0j").should("be.visible");
          cy.get("button").click();
        });

        //Logo and Copyright
        cy.get("div.logo-and-copyright").within(() => {
          //Logo
          cy.get("div.logo-container")
            .should("exist")
            .and("be.visible")
            .within(() => {
              cy.get("a").should("exist").and("have.attr", "href", "/");

              cy.get("img")
                .should("exist")
                .and("be.visible")
                .and(
                  "have.attr",
                  "src",
                  "https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
                );
            });

          //Copyright
          cy.get("div.copyright-container")
            .should("exist")
            .and("be.visible")
            .contains("© 2021 Udemy, Inc.");
        });
      });
    });
  });
});
