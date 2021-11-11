//
// Variables
//

//Global Variables

var currentD = moment().format("dddd, MMMM Do YYYY");
var currentH = moment().format("hh");
var workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var calendarNotes = [];

//Jumbotron Elements
var currentDayEl = $("#currentDay");

//Container Elements
var containerEl = $("#container");

//
// Functions
//


function onStart() {
    console.log("onStart running");
    console.log(currentD);
    console.log(currentH);

    //set date on Jumbotron
    $("#currentDay").text(currentD);

    // load saved notes
    loadNotes();

    // build work date hour grid
    buildDay();

}; //onStart


function loadNotes () {
    console.log("loadNotes running");

}; //loadNotes


function buildDay () {
    console.log("buildDay running");

    for (let i = 0; i < workHours.length; i++) {
        
        console.log(i);
        console.log(workHours[i]);
        iHour = i + 9;

        //Check current hour for time passed formatting
        var useClass = getTimeClass(iHour);

        //Build out row and columns
        var buildRow = $('<div>');
        buildRow.attr("class", "row");
        containerEl.append(buildRow);
        
    }

}; //buildDay


function getTimeClass(evaluateMe) {

    console.log("getTimeClass is running");

    if (evaluateMe < currentH) {

        return "pastTime";

    } else if (evaluateMe === currentH) {

        return "currentTime";

    } else {

        return "futureTime";

    }
        
}; //getTimeClass


//
//Start the App
//

onStart();