### Desired behavior:

No error and the filed inputed correctly

### Steps to reproduce: (app code and test code)

A file input present on the page and a file image.jpeg in the fixtures

cy.get("input[type=file]").attachFile("image.jpeg");

### Versions

Cypress 5.3,  cypress-file-upload: 4.1.1
