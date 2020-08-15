/*1.shift*/
var x = ['html','css','js'];
var y = x.shift();
console.log(x);

/*2.pop*/
var x = ['html','css','js'];
var y = x.pop();
console.log(x);

/*3.unshift*/
var x = ['html','css','js'];
var y = x.unshift('HTML');
console.log(x);

/*4.includes*/
var x = 'html css js';
var y = x.includes('html');
console.log(y);

/*5.from*/
var x = Array.from('javascript');
console.log(x);

/*6.every*/
var num = [10,10,10,10];
var ans = num.every((abc)=> abc == 10);
console.log(ans);

/*7.some*/
let a = [1,2,3,10];
let b = a.some((abc)=> abc == 10);
console.log(b);

/*8.join*/
var x = ['java', 'html', 'css'];
var y =x.join(' and ');
console.log(y);


/*9.indexOf*/
var x = ['javascript' ,'javascript'];
var y =x.indexOf('javascript');
console.log(y);

/*10.lastindexOf*/
var x = ['javascriptis' ,'javascript'];
var y =x.lastIndexOf('javascript');
console.log(y);

/*11.slice*/
var x = ['javascript' ,'is', 'core' ,'language'];
console.log(x.slice(1,3));


/*12.splice*/
var x = ['javascript' ,'is', 'core' ,'language'];
var y = x.splice(2,1,'node js');
console.log(x);

/*13.valueOf*/
var x ;
x = ['html']
console.log(x.valueOf());


/*14.find*/
var x = ['js','html','css'];
var y = x.find((abc)=> abc == 'html');
console.log(y);


/*15.findindex*/
var x = ['js','html','css'];
var y = x.findIndex((abc)=> abc == 'html');
console.log(y);

/*16.copyWith*/
var x = ['html', 'css','js'];
var y = x.copyWithin(2,0);
console.log(y);

/*17.fill*/
var x = ['html','css','js'];
var y =x.fill('js',1,2);
console.log(y);

/*18.filter*/
var x = ['html','css','js'];
var y = x.filter((z)=> z != 'css');
console.log(y);


/*19.map*/
var x = ['html','css','js'];
var y = x.map((z)=> z != 'css');
console.log(y);

/*20.isArray()*/
var x = ["html","css","javascript"];
var y =Array.isArray(x);
console.log(y);

/*21.toString*/
var x = ["html","css","javascript"];
var y =x.toString(); 
console.log(y);

/*22.reduce*/
var x =[10,10,10];
var y =(s , p) => s + p;
console.log(x.reduce(y));


/*23.reduceright*/
var x =[10,10,20,10,10];
var y =(s , p) => s + p;
console.log(x.reduceRight(y));

/*24.reverse*/
var x =['javascript','html','css'];
var y= x.reverse();
console.log(x);

/*25.sort*/
var x =[1,6,2,8,3,9,4,5];
var y =x.sort();
console.log(y);

/*26.push*/
var x = ['html','css','js'];
var y =x.push('node js');
console.log(x);

/*27.concat*/
var x = ['java'];
var y =['script'];
console.log(x.concat(y));

/*28.for each*/
var books =['english','tamil','telgu'];
var myFunction = function (item,index) {
    console.log('Books: ' + item + ' index: ' + index);
}
books.forEach(myFunction);


