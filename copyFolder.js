var copydir = require('copy-dir');
var site='apex';
var date = new Date().toString().split(" ");
var newPath='./Reports/'+site+'_'+date[1]+date[2]+'_'+date[4].toString().replace(/[:]/g,"-");
copydir.sync('./Reports', './'+newPath);
console.log('Copied folder')