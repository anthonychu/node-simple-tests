const assert = require('assert');
const data = require('../lib/data');

describe('Current city', function() {
  it('should be correct', function() {
    const actual = data.currentCity();
    assert.equal(actual, 'World');
  });
});
