const assert = require('assert');
const data = require('../lib/data');

describe('My data library', function() {
  it('Current city should be correct', function() {
    const actual = data.currentCity();
    assert.equal(actual, 'Los Angeles');
  });
});
