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

  context("Header of Home Page", () => {
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
  });

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

        if (index != 0 && index % 3 == 0) {
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

  context("Footer of Home Page", () => {
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
                .and("have.text", "Become an Instructor");
              cy.get("p").should("exist").and("be.visible");
              cy.get("div > a")
                .should("exist")
                .and("be.visible")
                .contains("Start teaching today")
                .click();
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
                .contains("Get Udemy for Business")
                .click();
              cy.go("back");
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

    it.only("Bottomost Panel (Links, Language, Logo and Copyright)", () => {
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
