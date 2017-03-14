/*
var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');
var doc = new GoogleSpreadsheet('1Rhk2RztBfbA59OcJNAwGzWTKU-bEu5IJGs1tXO419xE');
var sheet;
async.series([
function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
        console.log('Loaded doc: '+info.title+' by '+info.author.email);
        sheet = info.worksheets[0];
       browser.pause();
        console.log('sheet 1: '+sheet.title+' '+sheet.usedr.size+'x'+sheet.colCount);
       /!* sheet.getRows({
            offset: 1,
            limit: 20,
            orderby: 'col2'
        }, function( err, rows ){
            console.log('Read '+rows.length+' rows')});*!/
        step();
    });
}]);*/

var fs = require("fs");
var read_xlsx = require("read_xlsx");

var excelBuffer = fs.readFileSync('./Book1.xlsx');

read_xlsx.getWorkbook(excelBuffer).then(function(workbook){
    var sheetNames = workbook.getSheetNames();
    console.log(sheetNames);

    workbook.getSheet("Sheet1").then(function(sheet){
        var rowLen = sheet.getRows();
        var cellLen = sheet.getColumns();
        console.log('rowcount'+rowLen);
        console.log('Cellcount'+cellLen);
        var a=sheet.getCell(8,1);
        console.log(a);
        /*for(var i=0; i<rowLen; i++) {
            for(var k=0; k<cellLen; k++) {
                var cell = sheet.getCell(i,k);
                //If the cell is empty, it is possible that the cell does not exist return null!
                if(cell !== null) {
                    console.log(cell.getName()+":"+cell.getContents())
                }
            }
        }
*//*
        //find cell by name
        var a1Sheet = sheet.findCell("A1");
        var a1Str = a1Sheet.getContents();
        console.log(a1Str)*/
    })["catch"](function(err) {
        console.error(err.stack);
    });
});
