// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 
$(function () {

  runDateLogic();
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
     // HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    var saveContent = document.getElementById("text")
    
    var saveButton = document.getElementById("button")

    let saveText =  function saveText() {
        $('textarea').each(function() {
         let id = this.id;
         let value = this.value;
         localStorage.setItem(id, value)
         });
    }

    saveButton.addEventListener("click", saveText)
 
    
   
    // // TODO: Add code to apply the past, present, or future class to each time
    // // block by comparing the id to the current hour. HINTS: How can the id
    // // attribute of each time-block be used to conditionally add or remove the
    // // past, present, and future classes? How can Day.js be used to get the
    // // current hour in 24-hour time?
    let current_date = new Date();
    let current_hour = current_date.getHours();
    console.log(current_hour)

    let hourArr = [
      {
        id: "#hour-9",
        hour: setHour(9)
      },
      {
        id: "#hour-10",
        hour: setHour(10)
      },
      {
        id: "#hour-11",
        hour: setHour(11)
      },
      {
        id: "#hour-12",
        hour: setHour(12)
      },
      {
        id: "#hour-1",
        hour: setHour(13)
      },
      {
        id: "#hour-2",
        hour: setHour(14)
      },
      {
        id: "#hour-3",
        hour: setHour(15)
      },
      {
        id: "#hour-4",
        hour: setHour(16)
      },
      {
        id: "#hour-5",
        hour: setHour(17)
      }
    ];
    

    for (var i = 0; i < hourArr.length; i++) {
      if (hourArr[i].hour.getHours() < current_hour){
        var element = document.querySelector(hourArr[i].id);
        element.classList.add("past")
      }
      else if (hourArr[i].hour.getHours() > current_hour){
        var element = document.querySelector(hourArr[i].id);
        element.classList.add("future")
      }
      else if (hourArr[i] === current_hour){
        var element = document.querySelector(hourArr[i].id);
        element.classList.add("present")
      }
    }
    

    // // TODO: Add code to display the current date in the header of the page.
  });

  const setHour = function(hour) {
    const current_date = new Date();
    current_date.setHours(hour);
    return current_date;
  }

  const runDateLogic = function(){
    let now = document.getElementById("currentDay");
    let today = new Date();
    const options = { month: "long" };
    const dayOptions = { weekday: "long" };
  
    let month = new Intl.DateTimeFormat("en-US", options).format(today);
    let day = new Intl.DateTimeFormat("en-US", dayOptions).format(today);
    let date = today.getDate();
 

    let current_date = `${day}, ${month} ${date}`;
    now.innerText = current_date

  }
  
 


  