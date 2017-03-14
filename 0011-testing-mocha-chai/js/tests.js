var assert = chai.assert;

describe('function pow(x, n)', function() {

  describe('raises x to the power of n', function() {

    function makeTest(x) {
      var expected = x * x * x;
      it('result of raising ' + x + ' to the power of 3: ' + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it('result of raising any number to the negative power is NaN', function() {
    assert(isNaN(pow(2, -1)), 'pow(2, -1) not NaN');
  });

  it('result of raising any number to the fractional power is NaN', function() {
    assert(isNaN(pow(2, 1.5)), 'pow(2, -1.5) not NaN');
  });

  describe('result of raising any number, exept zero, to the power of 0 is 1', function() {

    function makeTest(x) {
      it('result of raising ' + x + ' to the power of 0 is 1: ', function() {
        assert.equal(pow(x, 0), 1);
      });
    }

    for (var x = -5; x <= 5; x += 2) {
      makeTest(x);
    }

  });

  it('result of raising 0 to the power of 0 is NaN', function() {
    assert(isNaN(pow(0, 0)), 'raises 0 to the power of 0 is not NaN');
  });
});