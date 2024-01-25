
$(function () {

  runDateLogic();
        
    let saveText =  function saveText() {
        $('textarea').each(function() {
         let id = this.id;
         let value = this.value;
         localStorage.setItem(id, value)
         });
    }
    
    let buttonArr = [
      '#button-9', 
      '#button-10', 
      '#button-11', 
      '#button-12', 
      '#button-13', 
      '#button-14', 
      '#button-15', 
      '#button-16', 
      '#button-17'
    ];

    for (let i = 0; i < buttonArr.length; i++) {
      var saveButton = document.querySelector(buttonArr[i]);
      saveButton.addEventListener("click", saveText);
    }
    
   
    
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
      else if (hourArr[i].hour.getHours() === current_hour){
        var element = document.querySelector(hourArr[i].id);
        element.classList.add("present")
      }
    }
    

  
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
  
 


  