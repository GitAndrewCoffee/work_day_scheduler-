//
// Variables
//

//Global Variables

var currentD = moment();

//Jumbo Tron Elements
var currentDayEl = $("#currentDay");

//
// Functions
//

function onStart() {

    console.log(currentDayEl);
    console.log(currentD);
    console.log(currentD._d)

    $("#currentDay").text(currentD._d);

};

//
//Start the App
//

onStart();