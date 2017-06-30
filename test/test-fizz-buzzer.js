
const should = require('chai').should();

const testFizzBuzzer = require('../fizzBuzzer');


describe('testFizzBuzzer', function() {
	//test normal cases
	it('should replace multiples of 15 with fizzbuzz'), function() {
		let arrayOfFizzBuzz = [15, 30, 45];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal('fizzbuzz');
		});
	}	
	it('should replace multiples of 5 with buzz'), function() {
		let arrayOfFizzBuzz = [5, 10, 20];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal('buzz');
		});
	}	
	it('should replace multiples of 3 with fizz'), function() {
		let arrayOfFizzBuzz = [3, 6, 9];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal('fizz');
		});
	}
	it('should return any other number as itself'), function() {
		let arrayOfFizzBuzz = [2, 7, 11];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal(i);
		});
	}
	it('should not work with negative numbers and decimals'), function() {
		let arrayOfFizzBuzz = [-5, 1.5];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.throwError(error);
		}).should.throwError(error);
	}
});

