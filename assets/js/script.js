//
// Variables
//

//Global Variables

var currentD = moment().format("dddd, MMMM Do YYYY");
var currentH = moment().format("k");
var workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var calendarNotes = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

//Jumbotron Elements
var currentDayEl = $("#currentDay");

//Container Elements
var containerEl = $("#container");

//
// Functions
//


function onStart() {
    console.log("onStart running");
    console.log("currentD is " + currentD);
    console.log("currenth is " + currentH);

    //set date on Jumbotron
    $("#currentDay").text(currentD);

    // load saved notes
    loadNotes();

    // build work date hour grid
    buildDay();

}; //onStart


function loadNotes () {
    console.log("loadNotes running");
    var loadedNotes = localStorage.getItem('calendarNotes');
     
    if (loadedNotes !== null) {
        calendarNotes = [];
        calendarNotes = loadedNotes.split(",");
        console.log(calendarNotes);
    };

}; //loadNotes


function buildDay () {
    console.log("buildDay running");

    for (let i = 0; i < workHours.length; i++) {
        
        console.log(i);
        console.log(workHours[i]);
        iHour = i + 9;

        function gotClicked() {

            var saveMe = $("#txt"+ i).val();   
            calendarNotes[i] = saveMe;
            console.log("calendarNotes[i] updated to: " + calendarNotes[i]);
            saveNotes();

        };


        //Check current hour for time passed formatting
        var useClass = getTimeClass(iHour);

        console.log("useClass is " + useClass);

        //Build out Row
        var buildRow = $('<div>');
        buildRow.attr('class', 'row');
        containerEl.append(buildRow);
        
        //Build out the hour label column
        var hourCol = $('<label>');
        hourCol.attr("class", "col-2 hour");
        hourCol.text(workHours[i]);
        buildRow.append(hourCol);
        
        //Build out text area
        var textCol = $('<textarea>');
        textCol.attr("class", "col-8 " + useClass);
        textCol.attr("id", "txt" + i);
        textCol.text(calendarNotes[i]);
        buildRow.append(textCol);
        
        //Built out save button
        var buttonCol = $('<button>');
        buttonCol.attr("class","col-2 saveBtn fa fa-save");
        buttonCol.attr("id", "btn" + i);
        buttonCol.on( "click", function() {
   
            gotClicked();
            
          });
        buildRow.append(buttonCol);
        console.log(calendarNotes);
    }


}; //buildDay


function getTimeClass(evaluateMe) {

    console.log("getTimeClass is running");
    console.log("evaluateMe is " + evaluateMe);
    console.log("currentH is " +currentH);

    if (evaluateMe < currentH) {

        return "past";

    } else if (evaluateMe == currentH) {

        return "present";

    } else {

        return "future";

    }
        
}; //getTimeClass


function saveNotes(){

    console.log("saveNotes is running");
    console.log(calendarNotes);
    localStorage.setItem('calendarNotes', calendarNotes);
    loadNotes();

}; //saveNotes


//
//Start the App
//

onStart();


