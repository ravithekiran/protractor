var objects=require("./data/user_data/keywords.json")
describe("Reading Json data",function () {
    it("reading parent object data",function () {
        // console.log(objects.OBJS);
    });
    it("Print array size and second element in jsn object array",function () {
        var arr=objects.keywords;
        console.log('Array Length:'+objects.keywords[1].keyword);
        console.log(arr.length);
       /* console.log('InnerJson:'+objects.OBJJ.OBJ1);
        console.log('iner json array2 item:'+objects.OBJJ.OBJ2[1])*/
        // console.log(arr[1]);
    });
    /*it("reading parent object data",function () {
        console.log(objects.OBJA);
    })*/
})
var button = element(by.id('compose-button'));
button.click();
browser.executeAsyncScript(
    'var callback = arguments[arguments.length - 1];' +
    'mailClient.getComposeWindowWidget().onload(callback);');
browser.switchTo().frame('composeWidget');
element(by.id('to')).sendKeys('dog@example.com');
/*var objects = require('xlsx');
describe('Excel data',function () {
    var workbook = objects.readFile('./data/user_data/Book1.xlsx');

// var first_sheet_name = workbook.SheetNames[0];

    var first_sheet_name = "Sheet2";
    var address_of_cell = 'A2';

    var worksheet = workbook.Sheets[first_sheet_name];
   // var rows=worksheet.lastr;
    /!* Find desired cell *!/
    // var rows=worksheet.rows.;
    // console.log("No of rows:"+rows);
    var desired_cell = worksheet['address_of_cell'];
    // console.log("No of rows:"+desired_cell);
    /!* Get the value *!/
    var desired_value = desired_cell.v;
    console.log(desired_value);
});*/
/*
var excel=require('exceljs');
describe('jcjadfaldjfh',function () {
    var workbook = new excel.Workbook();
    var filename='./data/user_data/Book1.xlsx';
    workbook.xlsx.readFile(filename)
        .then(function() {
            var worksheet = workbook.getWorksheet('Sheet2');
            Console.log(worksheet.lastRow);
        });



})*/
/**
 * Created by Selenium on 11-12-2015.
 */
/*
var XLSX = require('xlsx');
var Excel = require('exceljs');
var workbook = XLSX.readFile('./data/user_data/Book1.xlsx');

var first_sheet_name = workbook.SheetNames[1];

//var first_sheet_name = "Sheet2";

var address_of_cell = 'A2';

/!*var worksheet = workbook.Sheets[first_sheet_name];

/!* Find desired cell *!/
var desired_cell = worksheet[address_of_cell];

/!* Get the value *!/
var desired_value = desired_cell.v;

console.log('Value:'+desired_value);*!/

 var worksheet = workbook.Sheets[first_sheet_name];
console.log(workbook['cellHTML']);
// console.log(worksheet.rows.length)
// var rows=worksheet['sheetRows'].size();
var xlsxRows = require('xlsx-rows');
var rows = xlsxRows('./data/user_data/Book1.xlsx');
console.log('kkkk'+rows);
/!*var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) { /!* iterate through sheets *!/
    var worksheet = workbook.Sheets[y];
    for (z in worksheet) {
        /!* all keys that do not begin with "!" correspond to cell addresses *!/
        if(z[0] === '!') continue;
        console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
    }
});*!/
*/
