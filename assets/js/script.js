//
// Variables
//

//Global Variables

var currentD = moment().format("dddd, MMMM Do YYYY");
var workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var calendarNotes = [];

//Jumbotron Elements
var currentDayEl = $("#currentDay");

//
// Functions
//

function onStart() {
    console.log("onStart running");

    //set date on Jumbotron
    $("#currentDay").text(currentD);

    // load saved notes
    loadNotes();

    // build work date hour grid
    buildDay();

};

function loadNotes () {
    console.log("loadNotes running");

};

function buildDay () {
    console.log("buildDay running");

};

//
//Start the App
//

onStart();