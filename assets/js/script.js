// Display the current date and time in the header

function currentDate() {
    var currentDate = moment().format('dddd, MM/DD/YYYY - LT');        
    $("#currentDay").html(currentDate);
}
currentDate();
setInterval(currentDate, 1000); // refresh rate in milliseconds

    



