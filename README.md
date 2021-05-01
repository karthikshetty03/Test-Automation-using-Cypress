# Cypress-Microtasks-GSOC-21

### Cypress Tests for https://www.udemy.com/

### Why this website?
This website has course cards which are similar to the wikipedia preview plugin and can face iisues similar to that mentioned in this [storybook](https://wikimedia.github.io/wikipedia-preview/storybook-static/?path=/story/wikipedia-preview--standard-with-image).


### Folder Structure and test details
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

