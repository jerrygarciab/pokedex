describe('Main module tester', function () {

  beforeEach(module('pokedex'));

  it('should not be empty', function () {
    expect(2 + 2).toBe(4);
  });
});
