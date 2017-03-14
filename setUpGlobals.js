var fs = require('fs');
var defaultEnv = "QA";
var defaultSite = "apex";
// this.folderName;

// var defaultLang = "US_En";
var env = (process.argv[2] == undefined) ? defaultEnv : process.argv[2];
var site = (process.argv[3] == undefined) ? defaultSite : process.argv[3];
var date = new Date().toString().split(" ");
this.folderNameSetUp=('Reports/'+site+'_'+date[1]+date[2]+'_'+date[4].toString()).replace(/[:]/g,"-");
/*var lang = (process.argv[3] == undefined) ? defaultLang : process.argv[3];
var userFile = "./data/user_data/user_data." + lang + ".Env_" + env + ".js";
var appDataFile = "data/app_data/application_data." + lang + ".js";*/

var clientSpecificData = "./data/test_data/"+site+"/clientSpecificData.json";
var finalDataUsedFrom = "./data/run_data";
if (!fs.existsSync(finalDataUsedFrom)) {
    fs.mkdirSync(finalDataUsedFrom);
}
var date = new Date().toString().split(" ");
var d=date[1]+date[2]+"_"+date[4];
console.log(d)
console.log("Running setUpGlobals task");
console.log("Selected env:" + env);
console.log("Selected site:" +site);
/* console.log("Selected lang:" + lang);
console.log("Copied userFile:" + userFile);
console.log("Copied application data file:" + appDataFile);
*/

/*
var returnUrl=function(){
  var objects = require('./data/test_data/apex/clientSpecificData.json');
 if(env=='QA'){
 url=objects.qa_url;
 console.log('URL:'+url);
 }
 return url;
 }
// fs.createReadStream(configFile).pipe(fs.createWriteStream('./data/run_data/user_data.js'));
fs.createReadStream(clientSpecificData).pipe(fs.createWriteStream('./data/run_data/clientSpecificData.js'));

*/
