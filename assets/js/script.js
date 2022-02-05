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
var hour = document.querySelector(".hour");

$(".saveBtn").click(function() {

    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val();

localStorage.setItem(time, value)    
});

                          /*****************************/
                         /*--LOAD FROM LOCAL STORAGE--*/
                        /*****************************/

$(".time-block").each(function() {
    var timeBlock = $(this).attr("id");
    var savedTasks = localStorage.getItem(timeBlock);
    $(this).children(".description").val(savedTasks)
})

                          /****************************************/
                         /*--COLOR CHANGE BASED ON CURRENT TIME--*/
                        /****************************************/

function colorCode() {

    var currentTime = moment().hour();

    $(".time-block").each(function() {
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