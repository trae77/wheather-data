$(document).ready(function () {






  // ## Acceptance Criteria

  // ```
  // GIVEN a weather dashboard with form inputs
  // WHEN I search for a city
  // THEN I am presented with current and future conditions for that city and that city is added to the search history
  // WHEN I view current weather conditions for that city
  // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
  // WHEN I view the UV index
  // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
  // WHEN I view future weather conditions for that city
  // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
  // WHEN I click on a city in the search history
  // THEN I am again presented with current and future conditions for that city
  // ```
  // ## Mock-Up

  // The following image shows the web application's appearance and functionality:

  // ![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./Assets/06-server-side-apis-homework-demo.png)
  // ## Grading Requirements

  // This homework is graded based on the following criteria: 

  // ### Technical Acceptance Criteria: 40%

  // * Satisfies all of the above acceptance criteria plus the following:

  //     * Uses the OpenWeather API to retrieve weather data.

  //     * Uses `localStorage` to store persistent data.



  var start = $("#search")
  var name = $("#city1")
  var temperature = $("#temp")
  var humidity = $("#hum")
  var wind = $("#wind")
  var uv = $("#uv")
  var day1 = $("#day1")
  var day2 = $("#day2")
  var day3 = $("#day3")
  var day4 = $("#day4")
  var day5 = $("#day5")
  var tem1 = $("#tem1")
  var tem2 = $("#tem2")
  var tem3 = $("#tem3")
  var tem4 = $("#tem4")
  var tem5 = $("#tem5")
  var hum1 = $("#hum1")
  var hum2 = $("#hum2")
  var hum3 = $("#hum3")
  var hum4 = $("#hum4")
  var hum5 = $("#hum5")

  var search0 = $("#search1")
  var search1 = $("#search2")
  var search2 = $("#search3")
  var search3 = $("#search4")
  var search4 = $("#search5")
  var search5 = $("#search6")
  var dataArray = [];
  var history2 = []











 //  https://stackoverflow.com/questions/5410820/how-can-i-show-all-the-localstorage-saved-variables


  function updateDisplay() {


    for (i =0; i < localStorage.length; i++) {
      
      $(`#search${i}`).text(localStorage.getItem(localStorage.key(i)))
      
    }

   
    return;

  }



  search0.click(function () {
    //click works
    city = EventTarget.textcontent
    cityWheather();
   
  });

  search1.click(function () {
    //click works
    city = EventTarget.textcontent
    cityWheather();
  });

  search2.click(function () {
    //click works
    city = EventTarget.textcontent
    cityWheather();
  });

  search3.click(function () {
    //click works
    city = EventTarget.textcontent
    cityWheather();
  });

  search4.click(function () {
    //click works
    city = EventTarget.textcontent
    cityWheather();
  });

  search5.click(function () {
    //click works
    city = EventTarget.textcontent
    cityWheather();
  });




  start.on("click", function (e) {
    e.preventDefault();

    var city = $("#floatingInput").val().trim()
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=50735cce711c764de2fa4f86ca9affae"


    dataArray.push(city);


    localStorage.setItem(city, city);









    https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}

    $.ajax({
      url: url,
      method: "GET"
    }).then(function cityWheather(data) {


      console.log(data);


      name.text("city name : " + data.city.name)
      temperature.text("temperature : " + data.list[0].main.temp)
      humidity.text("humidity : " + data.list[0].main.humidity)
      wind.text("wind : " + data.list[0].wind.speed)

      day1.text("day : " + data.list[1].dt_txt)
      day2.text("day : " + data.list[9].dt_txt)
      day3.text("day : " + data.list[17].dt_txt)
      day4.text("day : " + data.list[25].dt_txt)
      day5.text("day : " + data.list[33].dt_txt)

      tem1.text("tempurature : " + data.list[1].main.temp)
      tem2.text("tempurature  : " + data.list[9].main.temp)
      tem3.text("tempurature  : " + data.list[17].main.temp)
      tem4.text("tempurature  : " + data.list[25].main.temp)
      tem5.text("tempurature  : " + data.list[33].main.temp)

      hum1.text("humidity : " + data.list[1].main.humidity)
      hum2.text("humidity : " + data.list[9].main.humidity)
      hum3.text("humidity : " + data.list[17].main.humidity)
      hum4.text("humidity : " + data.list[25].main.humidity)
      hum5.text("humidity : " + data.list[33].main.humidity)



      
      
      
      
      
      
    });
  });
  
  
  updateDisplay();
}) 
