/// <reference types="cypress" />

describe("Check Udemy home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(10000); //Time to ensure all xhr requests to complete, otherwise further tests can fail.
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

  it("Check Navigation Buttons", () => {
    for (let i = 0; i < 7; i++) {
      cy.get(`[data-index = ${i}] > div > button`)
        .should("exist")
        .and("have.text", topics[i])
        .click();
    }
  });

  it("Check navigation to each topic page", () => {
    cy.get("[data-purpose = tab-container] > div > div > div > a > span").each(
      ($item, index) => {
        cy.get(`[data-index = ${index}] > div > button`).click();
        cy.wrap($item)
          .should("exist")
          .and("have.text", `Explore ${topics[index]}`);
      }
    );
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

  it.only("Checking top categories", () => {
    cy.get("section.udlite-container > h2.top-categories--title--261i0")
      .should("exist")
      .and("be.visible")
      .and("have.text", "Top categories");

    cy.get(
      "section.udlite-container > div.top-categories--desktop-top-categories--rjvJV > div"
    ).each(($category, index) => {
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
    });
  });
});
