//mocha.setup('bdd');

const should = require('chai').should();

const testFizzBuzzer = require('../fizzBuzzer');

function fizzBuzz(firstNumber) {
	
	let results = [];

	for(let i = 0; i <= firstNumber; i++) {
		results.push(i); 
	}
	console.log(results);
}
fizzBuzz(15);


chai.should();

describe('testFizzBuzzer', function() {
	//test normal cases
	it('should replace multiples of 15 with fizzbuzz'), function() {

	}

	// it('should replace multiples of 3 with fizz, with multiples of 5 with buzz, and multiples of 15 with fizzbuzz', function() {
	// 	fizzBuzz(15).should.equal([1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz]);	
	// });
});

//mocha.run();
