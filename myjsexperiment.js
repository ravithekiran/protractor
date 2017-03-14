var fs = require('fs');
var dat=require('moment');
// var utls=require(__dirname + "/utility/utilities");
//
// var headerLinks = [['vija'], ['aij', '1'], ['b', '2'], [], ['c', '3']];
//
// for (var i = 0; i < headerLinks.length; i++) {
//     console.log(headerLinks[i][0] + " : " + headerLinks[i][1]);
// }
//
// var file = fs.readFile('./data/run_data/application_data.js');
// console.log(__dirname + '/data/run_data/');
//
// //Categories
// var categorySupport = 'Customer Support';
// var categoryImplementation = 'Implementation';
// var categoryDevelopment = 'Product Development';
// var categorySales = 'Sales';
//
// //Job count in Category
// var customerSupportJobs = 1;
// var ImplementationJobs = 6;
// var DevelopmentJobs = 13;
// var SalesJobs = 4;
//
//
// var jobsCountInCategory = new Map();
// jobsCountInCategory.set(categorySupport, customerSupportJobs);
// jobsCountInCategory.set(categoryImplementation, ImplementationJobs);
// jobsCountInCategory.set(categoryDevelopment, DevelopmentJobs);
// jobsCountInCategory.set(categorySales, SalesJobs);
//
// // console.log(jobsCountInCategory.size);
// // console.log(jobsCountInCategory.get(categorySales));
//
// console.log(jobsCountInCategory);
// fs.existsSync('repo')?fs.rmdirSync('repo'):console.log('no repo');

//fs.rmdir('vijay');
// fs.rmdirSync('ajai');

/*var deleteFolderRecursive = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
deleteFolderRecursive("repo");*/
this.numericDescendingSort=function(data){
    var newArr=data.slice();
    newArr.sort(function(a, b){return b - a});
    return newArr;
};
this.numericAscendingSort=function(data){
    var newArr=data.slice();
    newArr.sort(function(a, b){return a - b});
    return newArr;
};
var dates=['Sep 2nd 2016','Oct 3rd 2016','Sep 2nd 2015','Sep 2nd 2016','July 7th 2016'];
var date1='Sep 22nd 2016';
console.log(dat());

console.log(Date())
var dates1=[];
dates.forEach(function(val){
     dates1.push(dat(val, "MMM Do YYYY"));
})
var dates2=dates1.slice();
var date2=dat(dates, "MMM Do YYYY");
console.log(dates1)
console.log(this.numericAscendingSort(dates2))
expect(this.numericAscendingSort(dates2)).toEqual(dates1)
console.log(date2);