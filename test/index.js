
var assert = require('assert');
var ascii = require('../');

describe('ascii-codes', function() {
	describe('symbolForDecimal(Number) String', function() {
		it('should return the symbol for a given decimal', function() {
			assert.equal(')', ascii.symbolForDecimal(41));
			assert.equal('A', ascii.symbolForDecimal(65));
			assert.equal('}', ascii.symbolForDecimal(125));
		});
	});

	describe('symbolForHex(String) String', function() {
		it('should return the symbol for a given hexidecimal string', function() {
			assert.equal(')', ascii.symbolForHex(41 .toString(16)));
			assert.equal('A', ascii.symbolForHex(65 .toString(16)));
			assert.equal('}', ascii.symbolForHex(125 .toString(16)));
		});
	});

	describe('symbolForOctal(String) String', function() {
		it('should return the symbol for a given octal string', function() {
			assert.equal(')', ascii.symbolForOctal(41 .toString(8)));
			assert.equal('A', ascii.symbolForOctal(65 .toString(8)));
			assert.equal('}', ascii.symbolForOctal(125 .toString(8)));
		});
	});

	describe('decimalForSymbol(String) Number', function() {
		it('should return the decimal for a given symbol', function() {
			assert.equal(41, ascii.decimalForSymbol(")"));
			assert.equal(65, ascii.decimalForSymbol("A"));
			assert.equal(125, ascii.decimalForSymbol("}"));
		});
	});

	describe('hexForSymbol(String) String', function() {
		it('should return the hexidecimal string for a given symbol', function() {
			assert.equal(41 .toString(16), ascii.hexForSymbol(")"));
			assert.equal(65 .toString(16), ascii.hexForSymbol("A"));
			assert.equal(125 .toString(16), ascii.hexForSymbol("}"));
		});
	});

	describe('octalForSymbol(String) String', function() {
		it('should return the octal string for a given symbol', function() {
			assert.equal(41 .toString(8), ascii.octalForSymbol(")"));
			assert.equal(65 .toString(8), ascii.octalForSymbol("A"));
			assert.equal(125 .toString(8), ascii.octalForSymbol("}"));
		});
	});

	describe('symbolIndex Array[String]', function() {
		it('should contain the index of ASCII codes', function() {
			assert.equal(')', ascii.symbolIndex[41]);
			assert.equal('A', ascii.symbolIndex[65]);
			assert.equal('}', ascii.symbolIndex[125]);
		});
	});
});
