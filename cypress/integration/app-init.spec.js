/// <reference types="cypress" />

describe("Check Udemy home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(2000); //Time to ensure all xhr requests to complete, otherwise further tests can fail.
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

  context("Header of Home Page", () => {});

  context("Body of Home Page", () => {
    it("Check Navigation Buttons", () => {
      for (let i = 0; i < 7; i++) {
        cy.get(`[data-index = ${i}] > div > button`)
          .should("exist")
          .and("have.text", topics[i])
          .click();
      }
    });

    it("Check navigation to each topic page", () => {
      cy.get(
        "[data-purpose = tab-container] > div > div > div > a > span"
      ).each(($item, index) => {
        cy.get(`[data-index = ${index}] > div > button`).click();
        cy.wrap($item)
          .should("exist")
          .and("have.text", `Explore ${topics[index]}`);
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
        if (index % 3 == 0) {
          cy.get(
            "#course-unit-container-Studentsareviewing + button + button"
          ).click();
        }
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

  context("Footer of Home Page", () => {});
});
