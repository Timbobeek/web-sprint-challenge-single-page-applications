describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  }); //big state refresher, super important!!!

  //helpers to get elements

  const nameInput = () => cy.get("input[name=name]");
  const topping = (id) => cy.get(`input[name=topping${id}`);
  // const passwordInput = () => cy.get('input[name=password]');
  // const agreementInput = () => cy.get('input[name=termsAgreement]')
  const submitButton = () => cy.get("button[id=submit]");
  // const nameValidationMessage = () => cy.get('div#name-error');

  //just to check that i used proper elements from form.js
  it("proper elements are showing", () => {
    nameInput().should("exist");
    topping(1).should("exist");
    topping(2).should("exist");
    topping(3).should("exist");
    topping(4).should("exist");
    submitButton().should("exist");
  });

  describe("when user opens pizza form", () => {
    it("can add text to the name input box", () => {
      nameInput()
        .should("have.value", "")
        .type("name test test")
        .should("have.value", "name test test");
    });

    it("can select multiple toppings", () => {
      topping(1)
        .should("not.be.checked")
        .check({ force: true })
        .should("be.checked");
      topping(2)
        .should("not.be.checked")
        .check({ force: true })
        .should("be.checked");
      topping(3)
        .should("not.be.checked")
        .check({ force: true })
        .should("be.checked");
      topping(4)
        .should("not.be.checked")
        .check({ force: true })
        .should("be.checked");
    });

    it("form can be submitted", () => {
      submitButton().click();
      cy.location('pathname').should('equal', '/confirmed')
    });
  });
});
