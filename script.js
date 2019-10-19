// The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
// Each timeblock contains an input field and save button.
// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.
// The current day is displayed at the top of the calendar.
// Each timeblock is color coded to indicate whether it is in a past, present, or future hour.


$(document).ready(function() {

    function renderCalenderEvents() {
        var storedInput = localStorage.getItem("input")
        var inputObject = { 
            nine: storedInput.nine,
            ten: storedInput.ten,
            eleven: storedInput.eleven,  
            twelve: storedInput.twelve,
            one: storedInput.one,
            two: storedInput.two,
            three: storedInput.three,
            four: storedInput.four,
            five: storedInput.five,
        } 

        var keys = Object.keys(inputObject);
        for (var i = 0; i < keys.length + 1; i++) {
            var textarea = $("textarea").eq(i);
            var key = keys[i];
            var value = inputObject[key];
            textarea.val(value);
        }


        
        //var input = localStorage.getItem("input");
      

      
     
    };
    
    renderCalenderEvents();
  

    $(".btn").on("click", function(event) {
        //event.preventDefault();
        
        var calendarInput = $(event.target).parent().siblings(".col-9").children().val();


      //  3b. save to localstorage
        localStorage.setItem("input", calendarInput);
        //  3a. which textarea is being saved
        // renderCalenderEvents();
        
    });
    var currentDay = moment().format("dddd");
    $("#currentDay").text(currentDay);

    let currentTime = moment()
    console.log(currentTime.format("hh:mm a"));
    var format = "hh:mm a"
    var nineAM = moment("09:00 am", format)
    var tenAM = moment("10:00 am", format)
    var elevenAM = moment("11:00 am", format)
    var twelvePM = moment("12:00 pm", format)
    var onePM = moment("1:00 pm", format)
    var twoPM = moment("2:00 pm", format)
    var threePM = moment("3:00 pm", format)
    var fourPM = moment("4:00 pm", format)
    var fivePM = moment("5:00 pm", format)

    // Nine AM
    if (currentTime.isBefore(nineAM)) {
        $("#exampleFormControlTextarea1").addClass("future")
    }
    else if (currentTime.isAfter(nineAM)) {
        $("#exampleFormControlTextarea1").addClass("past")
    }
    else if (currentTime.isSame(nineAM)) {
        $("#exampleFormControlTextarea1").addClass("present")
    }
    // TEN AM
    if (currentTime.isBefore(tenAM)) {
        $("#exampleFormControlTextarea2").addClass("future")
    }
    else if (currentTime.isAfter(tenAM)) {
        $("#exampleFormControlTextarea2").addClass("past")
    }
    else if (currentTime.isSame(tenAM)) {
        $("#exampleFormControlTextarea2").addClass("present")
    }
    // ELEVEN AM
    if (currentTime.isBefore(elevenAM)) {
        $("#exampleFormControlTextarea3").addClass("future")
    }
    else if (currentTime.isAfter(elevenAM)) {
        $("#exampleFormControlTextarea3").addClass("past")
    }
    else if (currentTime.isSame(elevenAM)) {
        $("#exampleFormControlTextarea3").addClass("present")
    }
    // TWELVE PM
    if (currentTime.isBefore(twelvePM)) {
        $("#exampleFormControlTextarea4").addClass("future")
    }
    else if (currentTime.isAfter(twelvePM)) {
        $("#exampleFormControlTextarea4").addClass("past")
    }
    else if (currentTime.isSame(twelvePM)) {
        $("#exampleFormControlTextarea4").addClass("present")
    }
    // ONE PM
    if (currentTime.isBefore(onePM)) {
        $("#exampleFormControlTextarea5").addClass("future")
    }
    else if (currentTime.isAfter(onePM)) {
        $("#exampleFormControlTextarea5").addClass("past")
    }
    else if (currentTime.isSame(onePM)) {
        $("#exampleFormControlTextarea5").addClass("present")
    }
    // TWO PM
    if (currentTime.isBefore(twoPM)) {
        $("#exampleFormControlTextarea6").addClass("future")
    }
    else if (currentTime.isAfter(twoPM)) {
        $("#exampleFormControlTextarea6").addClass("past")
    }
    else if (currentTime.isSame(twoPM)) {
        $("#exampleFormControlTextarea6").addClass("present")
    }
    // THREE PM
    if (currentTime.isBefore(threePM)) {
        $("#exampleFormControlTextarea7").addClass("future")
    }
    else if (currentTime.isAfter(threePM)) {
        $("#exampleFormControlTextarea7").addClass("past")
    }
    else if (currentTime.isSame(threePM)) {
        $("#exampleFormControlTextarea7").addClass("present")
    }
    // FOUR PM
    if (currentTime.isBefore(fourPM)) {
        $("#exampleFormControlTextarea8").addClass("future")
    }
    else if (currentTime.isAfter(fourPM)) {
        $("#exampleFormControlTextarea8").addClass("past")
    }
    else if (currentTime.isSame(fourPM)) {
        $("#exampleFormControlTextarea8").addClass("present")
    }
    // FIVE PM
    if (currentTime.isBefore(fivePM)) {
        $("#exampleFormControlTextarea9").addClass("future")
    }
    else if (currentTime.isAfter(fivePM)) {
        $("#exampleFormControlTextarea9").addClass("past")
    }
    else if (currentTime.isSame(fivePM)) {
        $("#exampleFormControlTextarea9").addClass("present")
    }
    

    // if (currentTime.isBefore(nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM)) {
    //     console.log("true")
    //     $(".form-control").addClass("future");
    // }
    // else if (currentTime.isAfter(nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM)) {
    //     $(".form-control").addClass("past");
    // }
    // else if (currentTime.isSame(nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM)) {
    //     $(".form-control").addClass("present");
    // }
       

   



});


 



