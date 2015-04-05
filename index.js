
var symbolIndex = [
	"NUL",
	"SOH",
	"STX",
	"ETX",
	"EOT",
	"ENQ",
	"ACK",
	"BEL",
	"BS",
	"TAB",
	"LF",
	"VT",
	"FF",
	"CR",
	"SO",
	"SI",
	"DLE",
	"DC1",
	"DC2",
	"DC3",
	"DC4",
	"NAK",
	"SYN",
	"ETB",
	"CAN",
	"EM",
	"SUB",
	"ESC",
	"FS",
	"GS",
	"RS",
	"US",
	" ",
	"!",
	"\"",
	"#",
	"$",
	"%",
	"&",
	"'",
	"(",
	")",
	"*",
	"+",
	",",
	"-",
	".",
	"/",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	":",
	";",
	"<",
	"=",
	">",
	"?",
	"@",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"[",
	"\\",
	"]",
	"^",
	"_",
	"`",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"{",
	"|",
	"}",
	"~"
];

function decimalFromHex(n) {
	return parseInt(n, 16);
}

function hexFromDecimal(n) {
	return n.toString(16);
}

function decimalFromOctal(n) {
	return parseInt(n, 8);
}

function octalFromDecimal(n) {
	return n.toString(8);
}

function symbolForDecimal(n) {
	return symbolIndex[n];
}

function symbolForHex(n) {
	return symbolForDecimal(decimalFromHex(n));
}

function symbolForOctal(n) {
	return symbolForDecimal(decimalFromOctal(n));
}

function decimalForSymbol(s) {
	return symbolIndex.indexOf(s);
}

function hexForSymbol(s) {
	return hexFromDecimal(decimalForSymbol(s));
}

function octalForSymbol(s) {
	return octalFromDecimal(decimalForSymbol(s));
}

module.exports = {
	symbolForDecimal: symbolForDecimal,
	symbolForHex: symbolForHex,
	symbolForOctal: symbolForOctal,

	decimalForSymbol: decimalForSymbol,
	hexForSymbol: hexForSymbol,
	octalForSymbol: octalForSymbol,

	symbolIndex: symbolIndex
};
