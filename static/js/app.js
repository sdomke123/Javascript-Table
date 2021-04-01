// from data.js
var tableData = data;

// code to display all the data on the home page
var body = d3.select("tbody");
body.html("");

tableData.forEach(sighting => {
    var row = body.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events and filter data based on date input
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(input => input.datetime === inputValue);
    console.log(filteredData);

    var body = d3.select("tbody");
    body.html("");
   
    filteredData.forEach(input => {
        var row = body.append("tr");
        Object.entries(input).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value); 
        });
    });
};


    
