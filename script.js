var tod;
function writeHTMLasJS() {
    document.write(` <div id=\"hour-${i}\" class=\"row time-block\">`);
    document.write("      <div class=\"col-md-1 hour\">");
    document.write(`        ${i}${tod}`);
    document.write("      <\/div>");
    document.write("      <textarea class=\"col-md-10 description\">");
    document.write("      <\/textarea>");
    document.write("      <button class=\"btn saveBtn col-md-1\"><i class=\"fas fa-save\"><\/i><\/button>");
    document.write("    <\/div>");
}

for (var i = 0; i < 24; i++) {
    writeHTMLasJS()
    if (i > 10) {
        tod = "PM"
    } else {
        tod = "AM"
    };
}


$(document).ready(function () {
    // listen for save button clicks
    $(".saveBtn").on("click", function () {
        // get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save in localStorage
        localStorage.setItem(time, value);
    });

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            // check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load data from local storage, could not find a way to iterate through local storage so as repetitive as this is i had to do it this way. 
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));
    $("#hour-21 .description").val(localStorage.getItem("hour-21"));
    $("#hour-22 .description").val(localStorage.getItem("hour-22"));
    $("#hour-23 .description").val(localStorage.getItem("hour-23"));


    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});


// now place this function call at whatever point
// it needs to write the markup on to the page:

