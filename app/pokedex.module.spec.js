describe('Testing the main module', function () {
  beforeEach(module('pokedex'));

  it('Should have the main module defined', function () {
    expect(pokedex).toBeDefined();
  });
});
