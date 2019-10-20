$(document).ready(function() {

    function renderCalenderEvents() {
        
        var inputObject = { 
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
        
        var keys = Object.keys(inputObject);
        for (var i = 0; i < keys.length + 1; i++) {
            var textarea = $("textarea").eq(i);
            var key = keys[i];
            var value = inputObject[key];
            textarea.val(value);
        }
     
    };
    
    renderCalenderEvents();
  

    $(".btn").on("click", function(event) {
        
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
        
        
    });
    var currentDay = moment().format("dddd");
    $("#currentDay").text(currentDay);

    var currentTime = moment().format("HH");
    var nine = "09"
    var ten = "10"
    var eleven = "11"
    var twelve = "12"
    var one = "13"
    var two = "14"
    var three = "15"
    var four = "16"
    var five = "17"
   
    // NINE AM
    if (currentTime < nine) {
        console.log("is before");
        $("#exampleFormControlTextarea1").addClass("future");
      
    }
    else if (currentTime > nine) {
        console.log("is after");
        $("#exampleFormControlTextarea1").addClass("past");
        
    }
    else if (currentTime === nine) {
        console.log("is same");
        $("#exampleFormControlTextarea1").addClass("present");
    }
    // TEN AM
    if (currentTime < ten) {
        console.log("is before");
        $("#exampleFormControlTextarea2").addClass("future");
      
    }
    else if (currentTime > ten) {
        console.log("is after");
        $("#exampleFormControlTextarea2").addClass("past");
        
    }
    else if (currentTime === ten) {
        console.log("is same");
        $("#exampleFormControlTextarea2").addClass("present");
    }
  
    // ELEVEN AM
    if (currentTime < eleven) {
        console.log("is before");
        $("#exampleFormControlTextarea3").addClass("future");
      
    }
    else if (currentTime > eleven) {
        console.log("is after");
        $("#exampleFormControlTextarea3").addClass("past");
        
    }
    else if (currentTime === eleven) {
        console.log("is same");
        $("#exampleFormControlTextarea3").addClass("present");
    }
    // TWELVE PM
    if (currentTime < twelve) {
        console.log("is before");
        $("#exampleFormControlTextarea4").addClass("future");
      
    }
    else if (currentTime > twelve) {
        console.log("is after");
        $("#exampleFormControlTextarea4").addClass("past");
        
    }
    else if (currentTime === twelve) {
        console.log("is same");
        $("#exampleFormControlTextarea4").addClass("present");
    }
    // ONE PM
    if (currentTime < one) {
        console.log("is before");
        $("#exampleFormControlTextarea5").addClass("future");
      
    }
    else if (currentTime > one) {
        console.log("is after");
        $("#exampleFormControlTextarea5").addClass("past");
        
    }
    else if (currentTime === one) {
        console.log("is same");
        $("#exampleFormControlTextarea5").addClass("present");
    }
    // TWO PM
    if (currentTime < two) {
        console.log("is before");
        $("#exampleFormControlTextarea6").addClass("future");
      
    }
    else if (currentTime > two) {
        console.log("is after");
        $("#exampleFormControlTextarea6").addClass("past");
        
    }
    else if (currentTime === two) {
        console.log("is same");
        $("#exampleFormControlTextarea6").addClass("present");
    }
    // THREE PM
    if (currentTime < three) {
        console.log("is before");
        $("#exampleFormControlTextarea7").addClass("future");
      
    }
    else if (currentTime > three) {
        console.log("is after");
        $("#exampleFormControlTextarea7").addClass("past");
        
    }
    else if (currentTime === three) {
        console.log("is same");
        $("#exampleFormControlTextarea7").addClass("present");
    }
    // FOUR PM
    if (currentTime < four) {
        console.log("is before");
        $("#exampleFormControlTextarea8").addClass("future");
      
    }
    else if (currentTime > four) {
        console.log("is after");
        $("#exampleFormControlTextarea8").addClass("past");
        
    }
    else if (currentTime === four) {
        console.log("is same");
        $("#exampleFormControlTextarea8").addClass("present");
    }
    // FIVE PM
    if (currentTime < five) {
        console.log("is before");
        $("#exampleFormControlTextarea9").addClass("future");
      
    }
    else if (currentTime > five) {
        console.log("is after");
        $("#exampleFormControlTextarea9").addClass("past");
        
    }
    else if (currentTime === five) {
        console.log("is same");
        $("#exampleFormControlTextarea9").addClass("present");
    }
 

});


 


