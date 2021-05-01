
 <hr/>
 
 <h1><b>&emsp; &emsp;  &emsp; &emsp; Cypress Microtasks GSOC-21 <b/></h1>
 
 <hr/>
<br/>

### Cypress Tests for [Udemy's homepage](https://www.udemy.com/)

<br/>

## Why this website?


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

 - ### [home-header.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/home-header.spec.js)
   - #### Navbar and Billboard
 ![Screenshot from 2021-05-01 16-12-22](https://user-images.githubusercontent.com/45932358/116780212-cf9f3300-aa98-11eb-9b39-8d7a668819ab.png)


 - ### [home-body.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/home-body.spec.js)
   - #### 'Skills Hub' Panel
   ![Screenshot from 2021-05-01 16-20-22](https://user-images.githubusercontent.com/45932358/116780380-03c72380-aa9a-11eb-9956-19100320cc2e.png)

   - #### 'Students are Viewing' Panel
   ![Screenshot from 2021-05-01 16-27-42](https://user-images.githubusercontent.com/45932358/116780400-34a75880-aa9a-11eb-8a73-acfaec05aab3.png)

   - #### Onboarding Banner
   ![Screenshot from 2021-05-01 16-28-37](https://user-images.githubusercontent.com/45932358/116780415-4ee13680-aa9a-11eb-90a0-0915c4648543.png)

   - #### Top Categories
   ![Screenshot from 2021-05-01 16-29-18](https://user-images.githubusercontent.com/45932358/116780433-6a4c4180-aa9a-11eb-8449-9c0d575fe2ec.png)

   - #### Featured Topics by Category
   ![Screenshot from 2021-05-01 16-30-10](https://user-images.githubusercontent.com/45932358/116780447-86e87980-aa9a-11eb-8a77-1ff5a09b23b9.png)


 - ### [home-footer.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/home-body.spec.js)
   - #### 'Teach on Udemy' box
   ![Screenshot from 2021-05-01 16-32-08](https://user-images.githubusercontent.com/45932358/116780487-cb741500-aa9a-11eb-8b2c-3b19d822e706.png)

   - #### 'Udemy for Business' box
   ![Screenshot from 2021-05-01 16-33-14](https://user-images.githubusercontent.com/45932358/116780513-f6f6ff80-aa9a-11eb-95e5-378e63dd36df.png)

   - #### 'User Stories' panel
   ![Screenshot from 2021-05-01 16-34-24](https://user-images.githubusercontent.com/45932358/116780553-23128080-aa9b-11eb-91af-d65aa5441c89.png)

   - #### Bottomost panel
   ![Screenshot from 2021-05-01 16-35-09](https://user-images.githubusercontent.com/45932358/116780570-39b8d780-aa9b-11eb-8bf9-8a3c49389051.png)

 - ### [trending-preview.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/trending-previews.spec.js)
 ![Screenshot from 2021-05-01 17-07-53](https://user-images.githubusercontent.com/45932358/116781591-75ef3680-aaa1-11eb-952c-fde8914391e3.png)

 - ### [skills-preview.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/skills-previews.spec.js)
  ![Screenshot from 2021-05-01 17-20-40](https://user-images.githubusercontent.com/45932358/116781616-9ae3a980-aaa1-11eb-8aed-51aab3e94470.png)

 - ### [cart.spec.js](https://github.com/karthikshetty03/Cypress-Microtasks-GSOC-21/blob/main/cypress/integration/cart.spec.js)
 ![Screenshot from 2021-05-01 17-23-57](https://user-images.githubusercontent.com/45932358/116781672-0a599900-aaa2-11eb-874a-646746f2f750.png)


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

## Note
 - All images are taken from [Udemy](https://www.udemy.com/) website and used for reference purpose only
 - Running all the tests together on headless browser (locally or CIrcleCI) can fail some tests as there will be problems with popups not showing up etc.
 - In this case, run ``` $ npm run cypress ``` and open a file of your choice.

