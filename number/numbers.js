//number properties
// constructor
var num = 10;
console.log('number: ' + num.constructor);
var str = 'js';
console.log('string: ' + str.constructor);
var boolean = true;
console.log('boolean: ' + boolean.constructor);

// max_value
console.log(Number.MAX_VALUE);
// min_value
console.log(Number.MIN_VALUE);
// negative_infinity
console.log(Number.NEGATIVE_INFINITY);
// positive_infinity
console.log(Number.POSITIVE_INFINITY);
// NaN
console.log(Number.NaN);

//isFinite
console.log(Number.isFinite(123)); //true
console.log(Number.isFinite(-1.23)); //true
console.log(Number.isFinite(5-2)); //true
console.log(Number.isFinite(0)); //true
console.log(Number.isFinite('123')); //false
console.log(Number.isFinite('Hello')); //false
console.log(Number.isFinite('2005/12/12')); //false
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite(-Infinity)); //false
console.log(Number.isFinite(0 / 0)); //false

//isInteger
console.log(Number.isInteger(123)); //true
console.log(Number.isInteger(-123)); //true
console.log(Number.isInteger(5-2)); //true
console.log(Number.isInteger(0)); //true
console.log(Number.isInteger(0.5)); //false
console.log(Number.isInteger('123')); //false
console.log(Number.isInteger(false)); //false
console.log(Number.isInteger(Infinity)); //false
console.log(Number.isInteger(-Infinity)); //false
console.log(Number.isInteger(0 / 0)); //false

//isNan
console.log(Number.isNaN(NaN));
//value of
var num = 10;
console.log(num.valueOf());

//safeinteger
console.log(Number.isSafeInteger(123)); //true
console.log(Number.isSafeInteger(-123)); //true
console.log(Number.isSafeInteger(5-2)); //true
console.log(Number.isSafeInteger(0)); //true
console.log(Number.isSafeInteger(0.5)); //false
console.log(Number.isSafeInteger(Math.pow(2, 53))); //false
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));//true
console.log(Number.isSafeInteger('123')); //false
console.log(Number.isSafeInteger(false)); //false
console.log(Number.isSafeInteger(Infinity)); //false
console.log(Number.isSafeInteger(-Infinity)); //false
console.log(Number.isSafeInteger(0 / 0)); //false

//Exoponential
var num = 5.56789;
var n = num.toExponential();//5.56789e+0
console.log(n);

var num = 5.56789;
var n = num.toExponential(3);//5.568e+0
console.log(n);

//Fixed
var num = 5.56789;
var n = num.toFixed();//6
console.log(n);

var num = 5.56789;
var n = num.toFixed(8);//5.56789000
console.log(n);

//toString
var num = 15;
var n = num.toString();
console.log(n);

//toPrecision
var num = 13.3714;
var n = num.toPrecision(10);
console.log(n);
