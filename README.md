# Cypress-Microtasks-GSOC-21

### Cypress Tests for [Udemy's homepage](https://www.udemy.com/)

<br/>

## Why this website?
<hr/>

This website has course cards which are similar to the wikipedia preview plugin and can face isues similar to that mentioned in this [storybook](https://wikimedia.github.io/wikipedia-preview/storybook-static/?path=/story/wikipedia-preview--standard-with-image)

<br/>

## Folder Structure

```
├── _.circleci
│   ├── config.yml
|   |
├── _cypress
│   ├── _integration
│   |   ├── home-header.spec.js
│   |   |── home-body.spec.js
│   |   ├── home-footer.spec.js
│   |   ├── trending-preview.spec.js
│   |   ├── skills-preview.spec.js
│   |   └── cart.spec.js
|   |
│   ├── _support
|        └── commands.js
|
|─────  cypress.json
|─────  package.json
└────── README.md
```
<br/>

## Test Details
<hr/>

 - ### [home-header.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/home-header.spec.js)


 - ### [home-body.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/home-body.spec.js)
 - ### [home-footer.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/home-body.spec.js)
 - ### [trending-preview.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/trending-previews.spec.js)
 - ### [skills-preview.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/skills-previews.spec.js)

## Installation

```bash
$ git clone https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21.git
$ npm install 
```

## Usage

```bash
To run test file of your choice:
$ npm run cypress

To run all tests:
$ npm run cypress:all
```

## Results

<hr/>

```
#!/bin/bash -eo pipefail
npm run cypress:all

> Cypress-Microtasks-GSOC-21@1.0.0 cypress:all /root/project
> cypress run

Fontconfig warning: "/etc/fonts/fonts.conf", line 100: unknown element "blank"

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    7.1.0                                                                              │
  │ Browser:    Electron 89 (headless)                                                             │
  │ Specs:      6 found (cart.spec.js, home-body.spec.js, home-footer.spec.js, home-header.spec.js │
  │             , skills-previews.spec.js, trending-previews.spec.js)                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  cart.spec.js                                                                    (1 of 6)


  Checking the Cart functionality
    Desktop View
      ✓ Empty Cart (9599ms)
      ✓ Adding a course from students are viewing Panel (24788ms)
      ✓ Deleting a course from the cart of students are viewing Panel (28306ms)
      ✓ Adding a course from each skill in Skills Hub Panel (79928ms)
      ✓ Deleting all courses of skills hub panel in the cart (95688ms)


  5 passing (4m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        5                                                                                │
  │ Passing:      5                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     3 minutes, 59 seconds                                                            │
  │ Spec Ran:     cart.spec.js                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  home-body.spec.js                                                               (2 of 6)


  Check Body of Udemy's home page
    Desktop View
      ✓ Check Main Title (4955ms)
      ✓ Check Skills hub Panel (14119ms)
      ✓ Check 'Students are viewing' panel (76803ms)
      ✓ Check Onboarding Banner (5131ms)
      ✓ Checking top categories (8143ms)
      ✓ Checking Featured Topics by category (4805ms)


  6 passing (2m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        6                                                                                │
  │ Passing:      6                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     1 minute, 55 seconds                                                             │
  │ Spec Ran:     home-body.spec.js                                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  home-footer.spec.js                                                             (3 of 6)


  Check Footer of Udemy's home page
    Desktop View
      ✓ Checks 'Teach on Udemy' Box (11212ms)
      ✓ Checks 'Udemy for Business' box (4680ms)
      ✓ Checks User stories panel (4321ms)
      ✓ Bottomost Panel (Links, Language, Logo and Copyright) (5294ms)


  4 passing (26s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     26 seconds                                                                       │
  │ Spec Ran:     home-footer.spec.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  home-header.spec.js                                                             (4 of 6)


  Check header of Udemy's home page
    Desktop View
      ✓ Check Navbar (23313ms)
      ✓ Check Billboard (4635ms)


  2 passing (28s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        2                                                                                │
  │ Passing:      2                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     28 seconds                                                                       │
  │ Spec Ran:     home-header.spec.js                                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  skills-previews.spec.js                                                         (5 of 6)


  Testing cards on Skills Hub Panel
    Desktop View
      ✓ Course Cards (343402ms)


  1 passing (6m)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     5 minutes, 43 seconds                                                            │
  │ Spec Ran:     skills-previews.spec.js                                                          │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  trending-previews.spec.js                                                       (6 of 6)


  Testing cards on 'Students are Viewing' Panel
    Desktop View
      ✓ Course Cards (37984ms)


  1 passing (38s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     37 seconds                                                                       │
  │ Spec Ran:     trending-previews.spec.js                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  cart.spec.js                             03:59        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  home-body.spec.js                        01:55        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  home-footer.spec.js                      00:26        4        4        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  home-header.spec.js                      00:28        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  skills-previews.spec.js                  05:43        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  trending-previews.spec.js                00:37        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        13:10       19       19        -        -        -  

CircleCI received exit code 0
```


