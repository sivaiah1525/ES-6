/*1.shift*/
var x = ['html','css','js'];
var y = x.shift();//sames as startsWith method in string but it remove first element in array
console.log(x);

/*2.pop*/
var x = ['html','css','js'];
var y = x.pop();//sames as endssWith method in string but it remove last element in array
console.log(x);

/*3.unshift*/
var x = ['html','css','js'];
var y = x.unshift('HTML');//sames as shift method but add new element in array starts;
console.log(x);

/*4.includes*/
var x = 'html css js';
var y = x.includes('html');//return boolean same as string method.
console.log(y);

/*5.from*/
var x = Array.from('javascript');// same as split method;
console.log(x);

/*6.every*/
var num = [10,10,10,10];
var ans = num.every((abc)=> abc == 10);//return boolean , every array element pass test and it has same value.
console.log(ans);

/*7.some*/
let a = [1,2,3,10];
let b = a.some((abc)=> abc == 10);//return boolean , every array element pass test and atleat one same value. same as every method.
console.log(b);

/*8.join*/
var x = ['java', 'html', 'css'];
var y =x.join(' and ');// return  string , join new element in array
console.log(y);


/*9.indexOf*/
var x = ['javascript' ,'javascript'];
var y =x.indexOf('javascript');// same as indexOf string method
console.log(y);

/*10.lastindexOf*/
var x = ['javascriptis' ,'javascript'];
var y =x.lastIndexOf('javascript');// sames as lastIndexOf string method
console.log(y);

/*11.slice*/
var x = ['javascript' ,'is', 'core' ,'language'];
console.log(x.slice(1,3));// return array slice given the poistion;


/*12.splice*/
var x = ['javascript' ,'is', 'core' ,'language'];
var y = x.splice(2,1,'node js');//return  array splice given the poistion;
console.log(x);

/*13.valueOf*/
var x ;
x = ['html']
console.log(x.valueOf());//return  primitive value;


/*14.find*/
var x = ['js','html','css'];
var y = x.find((abc)=> abc == 'html');// return  string and find Each element in array(same as search in string method);
console.log(y);


/*15.findindex*/
var x = ['js','html','css'];
var y = x.findIndex((abc)=> abc == 'html');// same as find method but it return index.
console.log(y);

/*16.copyWith*/
var x = ['html', 'css','js'];
var y = x.copyWithin(2,0);// return array add a new element in array
console.log(y);

/*17.fill*/
var x = ['html','css','js'];
var y =x.fill('js',1,2);//fill the array given string and poistion
console.log(y);

/*18.filter*/
var x = ['html','css','js'];
var y = x.filter((z)=> z != 'css');// filter the array as per the condtion
console.log(y);


/*19.map*/
var x = ['html','css','js'];
var y = x.map((z)=> z != 'css');// same as filter method access condtion.
console.log(y);

/*20.isArray()*/
var x = ["html","css","javascript"];
var y =Array.isArray(x);//object return array;
console.log(y);

/*21.toString*/
var x = ["html","css","javascript"];
var y =x.toString(); // return  string into array;
console.log(y);

/*22.reduce*/
var x =[10,10,10];
var y =(s , p) => s + p;//return one element reduce array(left to right);
console.log(x.reduce(y));


/*23.reduceright*/
var x =[10,10,20,10,10];
var y =(s , p) => s + p;// return one element reduce array (right to array);
console.log(x.reduceRight(y));

/*24.reverse*/
var x =['javascript','html','css'];
var y= x.reverse();// return reverse array
console.log(x);

/*25.sort*/
var x =[1,6,2,8,3,9,4,5];
var y =x.sort();// return sorting with array
console.log(y);

/*26.push*/
var x = ['html','css','js'];
var y =x.push('node js');// push element in array;
console.log(x);

/*27.concat*/
var x = ['java'];
var y =['script'];
console.log(x.concat(y));// join the arrays

/*28.for each*/
var books =['english','tamil','telgu'];
var myFunction = function (item,index) {
    console.log('Books: ' + item + ' index: ' + index);
}
books.forEach(myFunction);

/*29 & 30 keys and entries*/
