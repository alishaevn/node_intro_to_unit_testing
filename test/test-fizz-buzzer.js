'use strict';

const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', function() {

  it ('should return fizz if the number is divisible by 3, buzz if it is divisible by 5, fizz-buzz if it is divisble by 15 and the regular number if none of those apply', function() {

    const normalCases = [
      { a: 6, expected:'fizz' },
      { a: 10, expected: 'buzz' },
      { a: 15, expected: 'fizz-buzz' },
      { a: 13, expected: 13 }
    ];

    normalCases.forEach(function (num) {
      const answer = fizzBuzzer(num.a);
      expect(answer).to.equal(num.expected);
    });
  });
  
  it('should throw an error', function () {

    const badCases = ['6', false];

    badCases.forEach(function (input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});