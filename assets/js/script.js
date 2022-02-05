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
