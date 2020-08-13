/*1.startsWith*/
var x = 'html css js';
console.log(x.startsWith('html'));//return boolean ;

/*2.endsWith*/
var x = 'html css js';
console.log(x.endsWith('html'));//return boolean;

/*3.include*/
var x = 'html css js';
var y = x.includes('html');// return boolean;
console.log(y);

/*4.split*/
var x ='java scr ipt' ;
var y =x.split(' ', 1)//return array with space;
console.log(y);

/*5.match*/
var x = 'javascript is SCRIPTED language in script';
var y = x.match(/script/gi);// return array with match ;
console.log(y);

/*6.replace*/
let a ='javascript is script language';
let b =a.replace('javascript','js');// just replace the string.
console.log(b);

/*7.concat*/
var x = 'java';
var y ='script';
console.log(x.concat(y));// join the strings

/*8.indexOf*/
var x = 'javascript javascript';
var y =x.indexOf('javascript');// find the firstindex of string
console.log(y);

/*9.lastindexOf*/
var x = 'javascript javascript';
var y =x.lastIndexOf('javascript');//find the lastIndexOf string
console.log(y);

/*slice*/
var x = 'javascript is core language';
console.log(x.slice(0,10));//slice the string as per given poistion

/*substring*/
var x = 'javascript is core language';
console.log(x.substring(0,10));// same as slice

/*substr*/
var x = 'javascript is core language';
console.log(x.substr(11,2));// same as slice but it access index poistion and length of slice string.

/*10.valueOf*/
var x ;
x = 'html'
console.log(x.valueOf());// return primitive value  of string

/*11.search*/

var x ='javascript is a language';
var y =x.search('is');// search the string and return string index
console.log(y);

/*13.repeat*/
var x =' javascript ';
console.log(x.repeat('4'));// repeat the string as per given value

/*14.charCodeAt*/
var x = 'javascript';
console.log(x.charCodeAt('j'));// j has unicode value is 106


/*15.fromCharCode*/
var x = String.fromCharCode(106);// unicode to covert string
console.log(x);

/*16.charAt*/
var x = 'javascript';
console.log(x.charAt(0));//return string as per the index poistion.

/*17,18,19,20,21*/
//to upper,toLowerCase
//localeCompare;
