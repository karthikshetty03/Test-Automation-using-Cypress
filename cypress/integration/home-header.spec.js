/// <reference types="cypress" />

describe("Check header of Udemy's home page", () => {
  beforeEach(() => {
    cy.VisitAndWait();
  });

  const dropdownList = [
    { link: "development", text: "Development" },
    { link: "business", text: "Business" },
    { link: "finance-and-accounting", text: "Finance & Accounting" },
    { link: "it-and-software", text: "IT & Software" },
    { link: "office-productivity", text: "Office Productivity" },
    { link: "personal-development", text: "Personal Development" },
    { link: "design", text: "Design" },
    { link: "marketing", text: "Marketing" },
    { link: "lifestyle", text: "Lifestyle" },
    { link: "photography-and-video", text: "Photography & Video" },
    { link: "health-and-fitness", text: "Health & Fitness" },
    { link: "music", text: "Music" },
    { link: "teaching-and-academics", text: "Teaching & Academics" },
  ];

  context("Desktop View", () => {
    it("Check Navbar", () => {
      /*
       * Complete Header Navbar testing
       * 1. Logo
       * 2. Categories
       * 3. Search Bar (label, input, submit)
       * 4. Cart
       * 5. Login Button
       * 6. Signup Button
       */

      cy.get("[data-purpose = header]")
        .should("exist")
        .and("be.visible")
        .within(() => {
          // 1. Checks Udemy Logo
          cy.get("a").should("exist").and("have.attr", "href", "/");
          cy.get("img")
            .should("exist")
            .and("be.visible")
            .and("have.attr", "src", "/staticx/udemy/images/v6/logo-coral.svg");

          // 2. Checks Categories dropdown on hover and each of the category within it
          cy.get("nav")
            .should("exist")
            .and("be.visible")
            .within(() => {
              cy.get("button.header--dropdown-button--1BviY").as(
                "dropdown-button"
              ); //Categories button
              cy.get("div.popper--popper-content--2KQmm").as("dropdown"); //list of categories as a dropdown menu

              /*
               *  Initially when the dropdown button
               *  is not hovered or clicked,
               *  then there shouls'nt be any dropdown list visibile
               *  Then, on triggering mouseover on dorpdown-button
               *  The list of categories should be
               *  visible as a dropdown list
               */

              cy.get("@dropdown").should("exist").and("not.be.visible");
              cy.get("@dropdown-button").trigger("mouseover");
              cy.get("@dropdown").should("exist").and("be.visible");

              cy.get("@dropdown").within(() => {
                cy.get("ul.list-menu--section--BZ3j9 > li")
                  .should("exist")
                  .and("be.visible")
                  .and("have.length", 13)
                  .each(($list, index) => {
                    cy.wrap($list).within(() => {
                      cy.get(`a`)
                        .should("exist")
                        .and(
                          "have.attr",
                          "href",
                          `/courses/${dropdownList[index].link}/`
                        );

                      cy.get("div")
                        .should("exist")
                        .and("be.visible")
                        .and("have.text", dropdownList[index].text);
                    });
                  });
              });
              cy.get("@dropdown-button").trigger("mouseout");
            });
        });

      // 3. Check search bar as a form inside div element
      cy.get("div.header--search-bar--1_mS0").within(() => {
        // 3.1 Label
        cy.get("label")
          .should("exist")
          .and("be.visible")
          .and("have.text", "Search for anything");

        // 3.2 Input
        cy.get("input.js-header-search-field")
          .should("exist")
          .and("be.visible")
          .type("Web development");

        // 3.3 Submit button
        cy.get("button").should("exist").and("be.visible").click();
        cy.go("back");
      });

      // 4. Cart
      cy.get("[data-purpose = cart-icon] + div").as("cart");
      cy.get("@cart").should("exist").and("not.be.visible");

      cy.get("[data-purpose = cart-icon]")
        .should("exist")
        .and("be.visible")
        .and("have.attr", "href", "/cart/")
        .trigger("mouseover");

      cy.get("@cart").should("exist").and("be.visible");
      cy.get("[data-purpose = cart-icon]").trigger("mouseover");

      //5. Login Button    (Functionality cannot be tested due to security reasons)
      cy.get("[data-purpose = header-login]").should("exist").and("be.visible");

      //6. Sign up button  (functionaltiy cannot be tested due to security reasons)
      cy.get("[data-purpose = header-signup]")
        .should("exist")
        .and("be.visible");
    });

    it("Check Billboard", () => {
      cy.get("[data-purpose = billboard]").within(() => {
        //image
        cy.get("img").should("exist").and("be.visible").and("have.attr", "src");

        //content
        //Dynamic content can be any one of the below

        // cy.get("div.billboard--content-box--JtXUJ")
        //   .should("exist")
        //   .and("be.visible");

        // cy.get("div.billboard-with-ufb--content-box--38_Go")
        //   .should("exist")
        //   .and("be.visible");
      });
    });
  });
});
