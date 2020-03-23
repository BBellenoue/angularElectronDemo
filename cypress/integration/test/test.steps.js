import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("i'm on the app", () => {
  cy.visit("/");
});

When("i click on the add button", () => {});

Then("a new item appear", () => {});
