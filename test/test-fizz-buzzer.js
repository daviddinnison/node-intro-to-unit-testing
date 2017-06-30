
const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer');


describe.only('fizzBuzz', function() {
	//test normal cases
	it('should replace multiples of 15 with fizzbuzz', function() {
		let arrayOfFizzBuzz = [15, 30, 45];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal('fizz-buzz');
		});
	});	
	it('should replace multiples of 5 with buzz', function() {
		let arrayOfFizzBuzz = [5, 10, 20];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal('buzz');
		});
	});
	it('should replace multiples of 3 with fizz', function() {
		let arrayOfFizzBuzz = [3, 6, 9];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal('fizz');
		});
	});
	it('should return any other number as itself', function() {
		let arrayOfFizzBuzz = [2, 7, 11];
		arrayOfFizzBuzz.forEach(function(i) {
			fizzBuzz(i).should.equal(i);
		});
	});
	it('should not work with negative numbers and decimals', function() {
		let arrayOfFizzBuzz = [true, false, -3];
		arrayOfFizzBuzz.forEach(function(i) {
			(function() {
				fizzBuzz(i)
			}).should.throw(Error);
		});
	});
});

