# ascii-codes

ASCII table reference and lookup functions

```bash
npm install ascii-codes
```

## Usage

```js
var ascii = require('ascii-codes');
var assert = require('assert');

assert.equal("A", ascii.symbolForDecimal(65));
assert.equal("A", ascii.symbolForHex("41"));
assert.equal("A", ascii.symbolForOctal("101"));

assert.equal(65, ascii.decimalForSymbol("A"));
assert.equal("41", ascii.hexForSymbol("A"));
assert.equal("101", ascii.octalForSymbol("A"));

/*
	Note: You can write number literals in hex and octal. Use symbolForDecimal() for those.
*/
assert.equal("A", ascii.symbolForDecimal(0x41));
assert.equal("A", ascii.symbolForDecimal(0101));
```

## Documentation

```
ascii-codes
    symbolForDecimal(Number) String
		returns the symbol for a given decimal 
    symbolForHex(String) String
		returns the symbol for a given hexidecimal string 
    symbolForOctal(String) String
		returns the symbol for a given octal string 
    decimalForSymbol(String) Number
		returns the decimal for a given symbol 
    hexForSymbol(String) String
		returns the hexidecimal string for a given symbol 
    octalForSymbol(String) String
		returns the octal string for a given symbol 
    symbolIndex Array[String]
		contains the table of ASCII codes 
```

## Contributing

Issues and pull requests are welcome.

```bash
# running tests
npm test
```

Follow me on [Twitter](https://twitter.com/compooter) for updates or just for the lolz and please check out my other [repositories](https://github.com/andrejewski) if I have earned it. I thank you for reading.

