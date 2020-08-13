// get date
var date = new Date();
console.log('get day: ' + date.getDay());
console.log('get year: ' + date.getFullYear());
console.log('get month: ' + date.getMonth());
console.log('get date: ' + date.getDate());
console.log('get hours: ' + date.getHours());
console.log('get minutes: ' + date.getMinutes());
console.log('get seconds: ' + date.getSeconds());
console.log('getmilliseconds: ' + date.getMilliseconds());
console.log('get time: ' + date.getTime());
console.log('get timezoneoffset: ' + date.getTimezoneOffset());
console.log('get UTC day: ' + date.getUTCDay());
console.log('get UTC year: ' + date.getUTCFullYear());
console.log('get UTC month: ' + date.getUTCMonth());
console.log('get UTC date: ' + date.getUTCDate());
console.log('get UTC hours: ' + date.getUTCHours());
console.log('get UTC minutes: ' + date.getUTCMinutes());
console.log('get UTC seconds: ' + date.getUTCSeconds());
console.log('get UTC milliseconds: ' + date.getUTCMilliseconds());

//set date
var d = new Date();
console.log('set year: ' + d.setFullYear(2018));
console.log('set month: ' + d.setMonth(5));
console.log('set date: ' + d.setDate(8));
console.log('set hours: ' + d.setHours(15));
console.log('set minutes: ' + d.setMinutes(10));
console.log('set seconds: ' + d.setSeconds(10));
console.log('set milliseconds: ' + d.setMilliseconds(10));
console.log('set time: ' + d.setTime(10));
console.log('set UTC year: ' + d.setUTCFullYear(2018));
console.log('set UTC month: ' + d.setUTCMonth(10));
console.log('set UTC date: ' + d.setUTCDate(10));
console.log('set UTC hours: ' + d.setUTCHours(10));
console.log('set UTC minutes: ' + d.setUTCMinutes(10));
console.log('set UTC seconds: ' + d.setUTCSeconds(10));
console.log('set UTC milliseconds: ' + d.setUTCMilliseconds(10));






//custom Date
var date = new Date("1996 ,march,03 ");
console.log(date);
console.log(date.toDateString());
// date types
console.log(new Date('2018,aug,29'));//iso date
console.log(new Date('2018/07/29'));//short date
console.log(new Date('29 aug 2018'));//long date

//parse toDates
var date =  Date.parse('29 aug 2018');
console.log(date);
