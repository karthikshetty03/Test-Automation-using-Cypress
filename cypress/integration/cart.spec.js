const topics = [
  "Python",
  "Excel",
  "Web Development",
  "JavaScript",
  "Data Science",
  "AWS Certification",
  "Drawing",
];

const addingCourseFromSkillsHub = () => {
  cy.get("[data-purpose = tab-nav-buttons] > div > div > div")
    .should("have.length", topics.length)
    .each(($item, index) => {
      cy.wait(2000);
      cy.wrap($item).click();

      let str = topics[index].replace(/ +/g, "");
      cy.get(`#course-unit-container-${str} > div`).as(`${str}-Box`);
      cy.get(`@${str}-Box`).first().as("course1");

      let val = 1;
      cy.wait(2000);
      cy.get(`@course${val}`).trigger("mouseover");
      cy.wait(2000);
      cy.get("[data-purpose=add-to-cart]")
        .should("exist")
        .and("be.visible")
        .click();
      cy.wait(2000);
      cy.get("[data-purpose = close-popup]").click();
    });

  //Check cart now should have topics.length item
  cy.get("[data-purpose = cart-icon]").trigger("mouseover");
  cy.get("a.panel-menu--item--3U1oy")
    .should("exist")
    .and("have.length", topics.length);
  cy.get("[data-purpose=header-shopping-cta]")
    .should("exist")
    .and("be.visible")
    .and("have.attr", "href", "/cart/")
    .and("have.text", "Go to cart")
    .click();
};

const addingCourseFromTrending = () => {
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

    it("Adding a course from students are viewing Panel", () => {
      //Cart should not have any items initially
      cy.get("div.shopping-item--buyable-info--1k-48").should("not.exist");
      addingCourseFromTrending();
    });

    it("Adding a course from each skill in Skills Hub Panel", () => {
      addingCourseFromSkillsHub();
    });

    it("Deleting a course from the cart of students are viewing Panele", () => {
      addingCourseFromTrending();

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

    it.only("Deleting all courses of skills hub panel in the cart", () => {
      addingCourseFromSkillsHub();

      cy.url().should("eq", "https://www.udemy.com/cart/");

      cy.get("[data-purpose = cart-list-title]")
        .should("exist")
        .and("be.visible")
        .and("have.text", `${topics.length} Courses in Cart`);

      //Delete all items in the cart
      for (let i = 0; i < topics.length; i++) {
        cy.get("div.styles--sc-card__actions--3C_uV > span:nth-child(1) > a")
          .first()
          .click();
      }

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
