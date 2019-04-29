import { exportAllDeclaration } from "@babel/types";

describe("First test",()=>{
    it("is working", ()=>{
        expect(true).to.equal(true); //mocha!
    });
});

describe("Functional Testing Counter",()=>{
    it("visits the app and clicks the button", ()=>{
        //navigate to app
        cy.visit("/"); //localhost:3000
        cy.get("button").click();
        cy.get("p").should("contain","Count : 1")
    });
});