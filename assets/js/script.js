// Display the current date and time in the header
function currentDate() {
    var currentDate = moment().format('dddd, MM/DD/YYYY - LT');        
    $("#currentDay").html(currentDate);
}
currentDate();
setInterval(currentDate, 1000); // refresh rate in milliseconds

                          /***************************/
                         /*--SAVE TO LOCAL STORAGE--*/
                        /***************************/

$(".saveBtn").click(function() {
    var time = $(this).parent().attr("id") // sets the variable  time to be equal to the id of whatever time-box you saved the task in
    var value = $(this).siblings(".description").val(); // sets the value to be whatever was typed into  the description box 
localStorage.setItem(time, value)  // saves to the local starage with the time and value attached  
});

                          /*****************************/
                         /*--LOAD FROM LOCAL STORAGE--*/
                        /*****************************/

$(".time-block").each(function() {
    var timeBlock = $(this).attr("id"); // lists all of the id's so that the saved items can match up with keys from the savedtasks
    var savedTasks = localStorage.getItem(timeBlock); // pairs the key with the correct timebox id
    $(this).children(".description").val(savedTasks)
})

                          /****************************************/
                         /*--COLOR CHANGE BASED ON CURRENT TIME--*/
                        /****************************************/

function colorCode() {
    var currentTime = moment().hour(); //  currentTime determines which timebox is "present" based on the current time
    $(".time-block").each(function() { // this function add's a specific class to "this/.time-block" based on whether it's in the past, present, or in the future
        var blockId = parseInt($(this).attr("id")); 
        if (blockId > currentTime) {
            $(this).addClass("future");
        }
        else if (blockId === currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }            
    })
}
colorCode();

// links for future reference cause this **** is confusing
// "https://api.jquery.com/parent/"
// "https://api.jquery.com/siblings/"
// "https://api.jquery.com/attr/"  