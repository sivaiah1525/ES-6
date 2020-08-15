//create object  and access property
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara'
     }
console.log('firstName: ' + person.firstName + ' lastName: ' + person.lastName);

// object is  mutable
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara'
     }
var change = person;
// change properties
change.lastName = 'AB';
//access properties
console.log('firstName: ' + person.firstName + ' lastName: ' + person.lastName);

// way of access object properties
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara'
     }
var change = person;
change.lastName = 'AB';
// dot notation
console.log('firstName: ' + person.firstName + ' lastName: ' + person.lastName);

//[] notation
console.log('firstName: ' + person['firstName'] + ' lastName: ' + person['lastName']);

// access dynamic properties
var name = 'firstName';
console.log('firstName: ' + person[name]);
 lName ='lastName';
 console.log('lastName: ' + person[lName]);
//for.... in loop
var data ='';
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara'
     }
  var x;
  for(x in person){
    data += person[x] + ' ';
  }

console.log('data: ' + data);

// adding and delete properties
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara'
     }
// adding property
person.dob = '08/03/1996';
console.log( 'DOB: ' + person.dob);
// delete property
delete person.age;
console.log('person:'  + person.age);

//object method
//this objeect method
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara',
     fullName:function () {// method name
          return this.firstName + ' ' + this.lastName;
       }
     };
  console.log(person.fullName());

//explict function binding
var person1 = {
  fullName:function () {
       return this.firstName + ' ' + this.lastName;
}
};
var person2 = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara'
   };
console.log(person1.fullName.call(person2));

//js getter
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara',
     get myAge(){
       return this.age;
     }
   };
console.log('get age: ' + person.myAge);

// js setter
var person = {
     firstName:'Govardhan',
     age:'',
     lastName:'Aaleswara',
     set myAge(value){
        this.age = value;
     }
   };
person.myAge = '22';
console.log('get age: ' + person.age);

// with out getter
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara',
     fullName:function () {// method name
          return this.firstName + ' ' + this.lastName;
       }
     };
  console.log('withoutgitter: ' + person.fullName());

// with gitter(it gives syntax smiple)
var person = {
     firstName:'Govardhan',
     age:'22',
     lastName:'Aaleswara',
      get fullName(){
        return this.firstName + ' ' + this.lastName;
      }
    };
   console.log('with gitter: ' + person.fullName);

   // data quality in getter
   var person = {
        firstName:'Govardhan',
        age:'22',
        lastName:'Aaleswara',
        fullName:function () {// method name
             return this.firstName.toUpperCase() + ' ' + this.lastName.toUpperCase();
          }
        };
     console.log('withgitter: ' + person.fullName());

     // data quality in setter
     var person = {
          firstName:'Govardhan',
          age:'',
          lastName:'Aaleswara',
          set myAge(value){
             this.age = value.split('');
          }
        };
     person.myAge = '22';
     console.log('get age: ' + person.age);
// couter
var game = {
    counter: 0,
    get reset(){
       this.counter = 0;
    },
    get increment() {
       this.counter++;
    },
    get decrement(){
      this.counter--;
    },
    set add(value){
       this.counter += value ;
    },
    set subtract(value){
      this.counter -= value;
    }
};
game.reset;
game.add = 10;
game.subtract = 5;
game.increment;
game.decrement;

console.log('counter: ' + game.counter);

// object.defineProperty
var game = { counter: 0 };

    Object.defineProperty(game,'reset',{
      get: function () {
          { this.counter = 0;}
      }});
    Object.defineProperty(game,'increment',{
      get: function () {
         {this.counter++;}
      }});
    Object.defineProperty(game,'decrement',{
       get: function () {
       {this.counter--;}
     }});
    Object.defineProperty(game,'add',{
       set: function (value) {
       {this.counter +=  value;}
     }});
    Object.defineProperty(game,'subtract',{
       set: function (value) {
       {this.counter -=  value;}
     }});
    game.reset;
    game.add = 10;
    game.subtract = 5;
    game.increment;
    game.decrement;

    console.log('counter: ' + game.counter);

// js object constructors
console.log('***js object constructors****');
function Cricket(captain,vicecaptain,wk_Kepper,bowler) {
      this.captain = captain;
      this.vicecaptain = vicecaptain;
      this.wk_Kepper = wk_Kepper;
      this.bowler = bowler;
      }
  var india = new Cricket('virat','rahual','pant','bumbhara');
  var england = new Cricket('cook' ,'root','anderson','sam');
  console.log(india);
  console.log('captain: ' + india.captain);
  console.log(england);
  console.log('captain: ' + england.captain);
  india.spinner = 'aswin';

  // adding property for object
  console.log('spinner: ' + india.spinner);

  // adding method for object
   india.team = function () {
      return this.captain + ' '+ this. vicecaptain;
   }
   console.log(india.team());

// adding properties for constructor
console.log('***js object constructors****');
function Cricket(captain,vicecaptain,wk_Kepper,bowler) {
      this.captain = captain;
      this.vicecaptain = vicecaptain;
      this.wk_Kepper = wk_Kepper;
      this.bowler = bowler;
    }
    // adding properties for constructor(undefind)
  Cricket.spinnerUndefind = 'aswin'; 

  var india = new Cricket('virat','rahual','pant','bumbhara');
  var england = new Cricket('cook' ,'root','anderson','sam');

 console.log('spinner: ' + india.spinnerUndefind);// undefind

// adding properties for constructor(defind)
function Cricket(captain,vicecaptain,wk_Kepper,bowler) {
      this.captain = captain;
      this.vicecaptain = vicecaptain;
      this.wk_Kepper = wk_Kepper;
      this.bowler = bowler;
      this.spinnerDefind = 'aswin';// adding properties for constructor(defind)
    };

  var india = new Cricket('virat','rahual','pant','bumbhara');
  var england = new Cricket('cook' ,'root','anderson','sam');

 console.log('spinner: ' + india.spinnerDefind);// defind

 // adding method for constructor

 function Laptop(prosessor,ram,storage) {
       this.prosessor = prosessor;
       this.Ram = ram;
       this.stroage = storage;
       this.graphics = '2GB';// adding property in constructor
       this.memory = function () {
            return this.stroage + ' and ' + this.Ram;// adding function in constructor

       };
       }
var dell = new Laptop('i7','8GB','1000GB');
var hp = new Laptop('i5','10GB','2000GB');

console.log('dell prosessor: ' + dell.prosessor);
console.log('hp prosessor: ' + hp.prosessor);

// adding  property in constructor
console.log('dell graphics: ' + dell.graphics);
console.log('hp graphics: ' + hp.graphics);

// adding function in constructor
console.log('dell memory: ' + dell.memory());
console.log('hp memory: ' + hp.memory());

// adding method for constructor
function superMarket(first,second,thired) {
    this.firstFloor=first;
    this.secondFloor=second;
    this.thiredFloor=thired;
    this.changeFloor=function (floor) {
         this.thiredFloor = floor;// dynamic function
    }
  };

  var dMart = new superMarket('veg','non-veg','both');
  var more = new superMarket('veg','non-veg','both');

   dMart.changeFloor('non-veg');
   more.changeFloor('non-veg');
  console.log('deMart: ' + dMart.firstFloor);
  console.log('more: ' + more.secondFloor);
  console.log('deMart: ' + dMart.thiredFloor);// dynamic function
  console.log('more: ' + more.thiredFloor);// dynamic function

// type of object
var x1 = new Object();   
var x2 = new String();   
var x3 = new Number();   
var x4 = new Boolean();  
var x5 = new Array();    
var x6 = new RegExp();   
var x7 = new Function(); 
var x8 = new Date();     
 x9 = {};                
var x10 = "";            
var x11 = 0;             
var x12 = false;         
var x13 = [];             



