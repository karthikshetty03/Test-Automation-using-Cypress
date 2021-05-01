/// <reference types="cypress" />

describe("Check Body of Udemy's home page", () => {
  beforeEach(() => {
    cy.VisitAndWait();
  });

  const brand = [
    "Over 130,000 video courses on career and personal skills",
    "Choose from top industry instructors across the world",
    "Learn at your own pace, with lifetime access on mobile and desktop",
  ];

  const topics = [
    "Python",
    "Excel",
    "Web Development",
    "JavaScript",
    "Data Science",
    "AWS Certification",
    "Drawing",
  ];

  const categories = [
    "design",
    "development",
    "marketing",
    "it-and-software",
    "personal-development",
    "business",
    "photography",
    "music",
  ];

  const featured = ["Development", "Business", "IT and Software", "Design"];

  context("Desktop View", () => {
    let title = "\nThe world's largest selection of courses\n";
    let subtitle =
      "\nChoose from 130,000 online video courses with new additions published every month\n";

    it("Check Main Title and Sub title", () => {
      cy.get("div.headline__main-text")
        .should("exist")
        .and("be.visible")
        .and("have.text", title);

      cy.get("div.headline__sub-text")
        .should("exist")
        .and("be.visible")
        .and("have.text", subtitle);
    });

    it("Check Skills hub Panel", () => {
      //Check topics navigation bar
      for (let i = 0; i < 7; i++) {
        cy.get(`[data-index = ${i}] > div > button`)
          .should("exist")
          .and("have.text", topics[i])
          .click();
      }

      //Checks on navigation to aach topic
      cy.get(
        "[data-purpose = tab-container] > div > div > div > a > span"
      ).each(($item, index) => {
        cy.get(`[data-index = ${index}] > div > button`).click();
        cy.wrap($item)
          .should("exist")
          .and("have.text", `Explore ${topics[index]}`);
      });
    });

    it("Checks Udemy Brand value panel", () => {
      cy.get("[data-purpose = value-props]")
        .should("exist")
        .and("be.visible")
        .within(() => {
          // cy.get("h2").should("exist").and("be.visible");   //[Glitch in the website: The element exists but is not visible]
          cy.get("div.value-props--prop--1d4kK")
            .should("exist")
            .and("be.visible")
            .each(($item, index) => {
              cy.wrap($item).within(() => {
                cy.get("svg").should("exist").and("be.visible");
                cy.get("div.udlite-heading-lg")
                  .should("exist")
                  .and("be.visible")
                  .and("have.text", brand[index]);
              });
            });
        });
    });

    it("Check 'Students are viewing' panel", () => {
      cy.get("[data-purpose = discovery-unit-1152523765]")
        .should("exist")
        .and("have.text", "Students are viewing");

      cy.get("#course-unit-container-Studentsareviewing > div")
        .should("exist")
        .and("have.length", 18)
        .as("courses");

      cy.get("@courses").each(($item, index) => {
        cy.wait(2000);
        cy.wrap($item).trigger("mouseover");
        cy.wait(1000);
        cy.wrap($item).trigger("mouseout");

        if (index != 0 && index % 3 == 0) {
          cy.get(
            "#course-unit-container-Studentsareviewing + button + button"
          ).click();
        }
      });
    });

    it("Check Onboarding Banner", () => {
      cy.get("div.onboarding--banner--18VFk")
        .should("exist")
        .and("be.visible")
        .within(() => {
          cy.get("[data-purpose = title]");
          cy.get("[data-purpose = subtitle]");
          cy.get("[data-purpose = submit-button]");
        });
    });

    it("Checking top categories", () => {
      cy.get("h2.top-categories--title--261i0")
        .should("exist")
        .and("be.visible")
        .and("have.text", "Top categories")
        .trigger("mouseover");
      cy.wait(2000);

      /*
       *  mouseover on top-categories title and wait,
       *  to load all top categories,
       *  so that further testing of each category
       *  does not fail
       *  due to problems of
       *  a particular category not being rendered
       *
       *  To make further tests fail,
       *  remove the above mouseover on title
       *  as well as the wait,
       *  test can fail due to content not being rendered
       *  as a scroll (indirect mouseover on the title)
       *  is not encountered
       *
       *  This is one of the important checkpoints on the website,
       *  as it is rendering content based on user scrolling,
       *  so the title on mouseover should render all categories,
       *  and this part is tested to ensure better user experience!
       */

      cy.get("div.top-categories--desktop-top-categories--rjvJV > div").each(
        ($category, index) => {
          cy.wrap($category).within(($item) => {
            cy.get("a").should(
              "have.attr",
              "href",
              `/courses/${categories[index]}/`
            );
            cy.get("img").should("have.attr", "alt", categories[index]);
            cy.get("img").should(
              "have.attr",
              "src",
              `https://s.udemycdn.com/home/top-categories/lohp-category-${categories[index]}.jpg`
            );
          });
        }
      );
    });

    it("Checking Featured Topics by category", () => {
      cy.get("h2.trending-topics--section-title--3UH9I")
        .should("exist")
        .and("be.visible");

      /*
       *  Below selected element should contains 5 children,
       *  4 trending topics and
       *  a 'Explore more' button at the end
       */

      cy.get("div.trending-topics--container--a08Wq > *")
        .should("exist")
        .and("be.visible")
        .and("have.length", 5)
        .each(($item, index) => {
          //if at last 'a' tag is found, ie. the 'Explore More' button
          if (index == 4) {
            cy.wrap($item).within(() => {
              cy.get("Span")
                .should("exist")
                .and("be.visible")
                .and("has.text", "Explore more");
            });
          } else {
            cy.wrap($item).within(() => {
              cy.get("div")
                .should("exist")
                .and("be.visible")
                .and("have.length", 10);

              cy.get("h2")
                .should("exist")
                .and("be.visible")
                .and("have.text", featured[index]);
            });
          }
        });
    });
  });
});
