// The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
// Each timeblock contains an input field and save button.
// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.
// The current day is displayed at the top of the calendar.
// Each timeblock is color coded to indicate whether it is in a past, present, or future hour.


$(document).ready(function() {

    function renderCalenderEvents() {
        
        //var Object to hold each textarea separately
        var inputObject = { 
            //each value of the object
            nine: localStorage.getItem("nine"),
            ten: localStorage.getItem("ten"),
            eleven: localStorage.getItem("eleven"), 
            twelve: localStorage.getItem("twelve"),
            one: localStorage.getItem("one"),
            two: localStorage.getItem("two"),
            three: localStorage.getItem("three"),
            four: localStorage.getItem("four"),
            five: localStorage.getItem("five"),
        } 
        // variable that shows the object as any array so we can iterate through it
        var keys = Object.keys(inputObject);
        // for loop that cycles through the keys variable
        for (var i = 0; i < keys.length + 1; i++) {
            // value within each textarea
            var textarea = $("textarea").eq(i);
            // value of each index of the array
            var key = keys[i];
            //variable to call the values of the object
            var value = inputObject[key];
            //calls the different values into the different textareas, using the for loop 
            textarea.val(value);
        }


        
        //var input = localStorage.getItem("input");
      

      
     
    };
    
    renderCalenderEvents();
  

    $(".btn").on("click", function(event) {
        //event.preventDefault();
        
        var calendarInput = $(event.target).parent().siblings(".col-9").children().val();
        if ($(event.target).hasClass("nine")) {
            localStorage.setItem("nine", calendarInput);
        } else if ($(event.target).hasClass("ten")) {
            localStorage.setItem("ten", calendarInput)
        } else if ($(event.target).hasClass("eleven")) {
            localStorage.setItem("eleven", calendarInput)
        } else if ($(event.target).hasClass("twelve")) {
            localStorage.setItem("twelve", calendarInput) 
        } else if ($(event.target).hasClass("one")) {
            localStorage.setItem("one", calendarInput)
        } else if ($(event.target).hasClass("two")) {
            localStorage.setItem("two", calendarInput)
        } else if ($(event.target).hasClass("three")) {
            localStorage.setItem("three", calendarInput)
        } else if ($(event.target).hasClass("four")) {
            localStorage.setItem("four", calendarInput)
        }  else if ($(event.target).hasClass("five")) {
            localStorage.setItem("five", calendarInput)
        } ;
        
        //  3a. which textarea is being saved  

        //  3b. save to localstorage
     
    
        //renderCalenderEvents();
        
    });
    var currentDay = moment().format("dddd");
    $("#currentDay").text(currentDay);

    var currentTime = moment().format("h a")
    // var compare = moment('2pm', 'ha')
    console.log("look under me!");
    console.log(moment(currentTime, 'h a'));
    console.log(moment(currentTime, 'h a').isSame(twoPM, "hour"));
    console.log(moment(currentTime, "h a").isBefore(nineAM, "hour"));
   
    var nineAM = moment("9 am", "h a")
    var tenAM = moment("10am", "h a")
    var elevenAM = moment("11am", "h a")
    var twelvePM = moment("12pm", "h a")
    var onePM = moment("1pm", "h a")
    var twoPM = moment("2pm", "h a")
    var threePM = moment("3pm", "h a")
    var fourPM = moment("4pm", "h a")
    var fivePM = moment("5pm", "h a")
  
    //two pm test
    if (moment(currentTime, 'h a').isSame(twoPM, "hour") === true) {
        $("#exampleFormControlTextarea6").addClass("present");
    }
    else if (moment(currentTime, "h a").isBefore(nineAM, "hour")) {
           $("#exampleFormControlTextarea1").addClass("future");
      

    }
  


    // Nine AM
    // if (moment(currentTime, "h a").isBefore(nineAM, "hour") === true) {
    //     console.log("is before");
    //     $("#exampleFormControlTextarea1").addClass("future");
      
    // }
    // else if (moment(currentTime).isAfter(nineAM, "hour") === true) {
    //     console.log("is after");
    //     $("#exampleFormControlTextarea1").addClass("past");
        
    // }
    // else if (moment(currentTime).isSame(nineAM, "hour") === true) {
    //     console.log("is same");
    //     $("#exampleFormControlTextarea1").addClass("present");
    // }
    // TEN AM
    // if (currentTime.isBefore(tenAM)) {
    //     $("#exampleFormControlTextarea2").addClass("future")
    // }
    // else if (currentTime.isAfter(tenAM)) {
    //     $("#exampleFormControlTextarea2").addClass("past")
    // }
    // else if (currentTime.isSame(tenAM)) {
    //     $("#exampleFormControlTextarea2").addClass("present")
    // }
    // // ELEVEN AM
    // if (currentTime.isBefore(elevenAM)) {
    //     $("#exampleFormControlTextarea3").addClass("future")
    // }
    // else if (currentTime.isAfter(elevenAM)) {
    //     $("#exampleFormControlTextarea3").addClass("past")
    // }
    // else if (currentTime.isSame(elevenAM)) {
    //     $("#exampleFormControlTextarea3").addClass("present")
    // }
    // // TWELVE PM
    // if (currentTime.isBefore(twelvePM)) {
    //     $("#exampleFormControlTextarea4").addClass("future")
    // }
    // else if (currentTime.isAfter(twelvePM)) {
    //     $("#exampleFormControlTextarea4").addClass("past")
    // }
    // else if (currentTime.isSame(twelvePM)) {
    //     $("#exampleFormControlTextarea4").addClass("present")
    // }
    // // ONE PM
    // if (currentTime.isBefore(onePM)) {
    //     $("#exampleFormControlTextarea5").addClass("future")
    // }
    // else if (currentTime.isAfter(onePM)) {
    //     $("#exampleFormControlTextarea5").addClass("past")
    // }
    // else if (currentTime.isSame(onePM)) {
    //     $("#exampleFormControlTextarea5").addClass("present")
    // }
    // // TWO PM
    // if (currentTime.isBefore(twoPM)) {
    //     $("#exampleFormControlTextarea6").addClass("future")
    // }
    // else if (currentTime.isAfter(twoPM)) {
    //     $("#exampleFormControlTextarea6").addClass("past")
    // }
    // else if (currentTime.isSame(twoPM)) {
    //     $("#exampleFormControlTextarea6").addClass("present")
    // }
    // // THREE PM
    // if (currentTime.isBefore(threePM)) {
    //     $("#exampleFormControlTextarea7").addClass("future")
    // }
    // else if (currentTime.isAfter(threePM)) {
    //     $("#exampleFormControlTextarea7").addClass("past")
    // }
    // else if (currentTime.isSame(threePM)) {
    //     $("#exampleFormControlTextarea7").addClass("present")
    // }
    // // FOUR PM
    // if (currentTime.isBefore(fourPM)) {
    //     $("#exampleFormControlTextarea8").addClass("future")
    // }
    // else if (currentTime.isAfter(fourPM)) {
    //     $("#exampleFormControlTextarea8").addClass("past")
    // }
    // else if (currentTime.isSame(fourPM)) {
    //     $("#exampleFormControlTextarea8").addClass("present")
    // }
    // // FIVE PM
    // if (currentTime.isBefore(fivePM)) {
    //     $("#exampleFormControlTextarea9").addClass("future")
    // }
    // else if (currentTime.isAfter(fivePM)) {
    //     $("#exampleFormControlTextarea9").addClass("past")
    // }
    // else if (currentTime.isSame(fivePM)) {
    //     $("#exampleFormControlTextarea9").addClass("present")
    // }
    

    // // if (currentTime.isBefore(nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM)) {
    // //     console.log("true")
    // //     $(".form-control").addClass("future");
    // // }
    // // else if (currentTime.isAfter(nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM)) {
    // //     $(".form-control").addClass("past");
    // // }
    // // else if (currentTime.isSame(nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM)) {
    // //     $(".form-control").addClass("present");
    // // }
       

 



});


 


