export { }

it("assert title Sebas", () => {
    cy.visit("http://localhost:3000/");
    cy.get('#title').should('contain', 'Sebas')
});