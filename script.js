//your JS code here. If required.
// cypress/integration/tests/test.spec.js

describe("Basic Rendering and Components", () => {
  beforeEach(() => {
    cy.visit("your-website-url"); // Replace with the URL of your website
  });

  it("Checking the heading", () => {
    cy.get("#photo-heading")
      .invoke("text")
      .then((text) => {
        console.log("Actual Text:", text);
      });

    cy.get("#photo-heading").should("have.text", "Animal Photos".trim());
  });

  it("Checking the Nesting inside", () => {
    cy.get("#animal-photos").find("img").should("exist").and("have.length", 9);
  });

  // Add more test cases as needed
});
