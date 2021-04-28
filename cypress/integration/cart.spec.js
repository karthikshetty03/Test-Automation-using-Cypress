const addingCourse = () => {
  let popup =
    "div.course-details-quick-view-box--popover-wrapper--3jFIa > div > div > div > div";
  cy.get("#course-unit-container-Studentsareviewing > [data-index = 3]").as(
    "course"
  );

  cy.wait(5000);
  cy.get("@course").trigger("mouseover");
  cy.wait(2000);
  cy.get("@course").trigger("mouseout");
  cy.wait(5000);
  cy.get("@course").trigger("mouseover");
  cy.get("[data-purpose=add-to-cart]")
    .should("exist")
    .and("be.visible")
    .click();

  cy.get("[data-purpose = close-popup]").click();

  //Check cart now should have 1 item
  cy.get("[data-purpose = cart-icon]").trigger("mouseover");
  cy.get("a.panel-menu--item--3U1oy").should("exist").and("have.length", 1);

  cy.get("[data-purpose=header-shopping-cta]")
    .should("exist")
    .and("be.visible")
    .and("have.attr", "href", "/cart/")
    .and("have.text", "Go to cart")
    .click();
};

describe("Checking the Cart functionality", () => {
  beforeEach(() => {
    cy.VisitAndWait();
  });

  context("Desktop View", () => {
    it("Empty Cart", () => {
      cy.get("[data-purpose=header-shopping-cta]").should("not.exist");
      cy.get("[data-purpose = cart-icon]").trigger("mouseover");
      cy.get("[data-purpose=header-shopping-cta]")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "href", "/")
        .and("have.text", "Keep shopping")
        .click();
    });

    it("Adding a course", () => {
      //Cart should not have any items initially
      cy.get("div.shopping-item--buyable-info--1k-48").should("not.exist");
      addingCourse();
    });

    it("Deleting a course", () => {
      addingCourse();

      cy.url().should("eq", "https://www.udemy.com/cart/");

      cy.get("[data-purpose = cart-list-title]")
        .should("exist")
        .and("be.visible")
        .and("have.text", "1 Course in Cart");

      cy.get("[data-purpose = actions]").click();

      cy.get("[data-purpose = cart-list-title]")
        .should("exist")
        .and("be.visible")
        .and("have.text", "0 Courses in Cart");

      cy.get("[data-purpose = keep-shopping-action]")
        .should("exist")
        .and("be.visible")
        .click();

      cy.url().should("eq", "https://www.udemy.com/");
    });
  });
});
