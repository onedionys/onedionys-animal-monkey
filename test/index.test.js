const assert = require('assert');
const { getAnimal } = require('../src/index');

describe('Showing name of one animal', function() {
  describe('#getAnimal()', function() {
    it('should return animal monkey', function() {
      assert.strictEqual(getAnimal(), 'Monkey');
    });
  });
});
