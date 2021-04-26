/// <reference types="cypress" />

describe("Check Udemy home page", () => {
  beforeEach(() => {
    cy.visit("/");
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

  it("Check Nav Buttons", () => {
    for (let i = 0; i < 7; i++) {
      cy.get(`[data-index = ${i}] > div > button`)
        .should("exist")
        .and("have.text", topics[i])
        .click();
    }
  });

  it.only("Check navigation to each topic page", () => {
    cy.get("[data-purpose = tab-container] > div > div > div > a > span").each(
      ($item, index) => {
        cy.wrap($item).should("have.text", `Explore ${topics[index]}`);
      }
    );
  });
});