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

  var search0 = $("#search0")
  var search1 = $("#search1")
  var search2 = $("#search2")
  var search3 = $("#search3")
  var search4 = $("#search4")
  var search5 = $("#search5")
  var dataArray = [];
  var city = []






  // get uv index 
  // update on display
  // / WHEN I view the UV index
  // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
  // WHEN I click on a city in the search history
  // THEN I am again presented with current and future conditions for that city



  //  https://stackoverflow.com/questions/5410820/how-can-i-show-all-the-localstorage-saved-variables


  function updateDisplay() {


    for (i = 0; i < localStorage.length; i++) {

      $(`#search${i}`).text(localStorage.getItem(localStorage.key(i)))

    }


    return;

  }

  function cityWheather(city2) {
    console.log("connected");
    console.log(city);


    url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city2 + "&units=imperial&appid=50735cce711c764de2fa4f86ca9affae"
    $.ajax({
      url: url,
      method: "GET"
    }).then(function (data) {


      console.log(data);


      name.text("city name : " + data.city.name);
      temperature.text("temperature : " + data.list[0].main.temp);
      humidity.text("humidity : " + data.list[0].main.humidity);
      wind.text("wind : " + data.list[0].wind.speed);

      day1.text("day : " + data.list[1].dt_txt);
      day2.text("day : " + data.list[9].dt_txt);
      day3.text("day : " + data.list[17].dt_txt);
      day4.text("day : " + data.list[25].dt_txt);
      day5.text("day : " + data.list[33].dt_txt);

      tem1.text("tempurature : " + data.list[1].main.temp);
      tem2.text("tempurature  : " + data.list[9].main.temp);
      tem3.text("tempurature  : " + data.list[17].main.temp);
      tem4.text("tempurature  : " + data.list[25].main.temp);
      tem5.text("tempurature  : " + data.list[33].main.temp);

      hum1.text("humidity : " + data.list[1].main.humidity);
      hum2.text("humidity : " + data.list[9].main.humidity);
      hum3.text("humidity : " + data.list[17].main.humidity);
      hum4.text("humidity : " + data.list[25].main.humidity);
      hum5.text("humidity : " + data.list[33].main.humidity);






    });

  };

  search0.click(function () {
    //click works
    city = localStorage.getItem(localStorage.key(0));
    cityWheather(localStorage.getItem(localStorage.key(0)));

  });

  search1.click(function () {
    //click works
    city2 = localStorage.getItem(localStorage.key(1));
    cityWheather(city2);
  });

  search2.click(function () {
    //click works
    city2 = localStorage.getItem(localStorage.key(2));
    cityWheather(city2);
  });

  search3.click(function () {
    //click works
    city2 = localStorage.getItem(localStorage.key(3));
    cityWheather(city2);
  });

  search4.click(function () {
    //click works
    city2 = localStorage.getItem(localStorage.key(4));
    cityWheather(city2);
  });

  search5.click(function () {
    //click works
    city2 = localStorage.getItem(localStorage.key(5));
    cityWheather(city2);
  });



  start.on("click", function (e) {
    e.preventDefault();

    var city = $("#floatingInput").val().trim();
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=50735cce711c764de2fa4f86ca9affae"




    dataArray.push(city);


    localStorage.setItem(city, city);









    https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}

    $.ajax({
      url: url,
      method: "GET"
    }).then(function (data) {


      console.log(data);


      name.text("city name : " + data.city.name);
      temperature.text("temperature : " + data.list[0].main.temp);
      humidity.text("humidity : " + data.list[0].main.humidity);
      wind.text("wind : " + data.list[0].wind.speed);

      day1.text("day : " + data.list[1].dt_txt);
      day2.text("day : " + data.list[9].dt_txt);
      day3.text("day : " + data.list[17].dt_txt);
      day4.text("day : " + data.list[25].dt_txt);
      day5.text("day : " + data.list[33].dt_txt);

      tem1.text("tempurature : " + data.list[1].main.temp);
      tem2.text("tempurature  : " + data.list[9].main.temp);
      tem3.text("tempurature  : " + data.list[17].main.temp);
      tem4.text("tempurature  : " + data.list[25].main.temp);
      tem5.text("tempurature  : " + data.list[33].main.temp);

      hum1.text("humidity : " + data.list[1].main.humidity);
      hum2.text("humidity : " + data.list[9].main.humidity);
      hum3.text("humidity : " + data.list[17].main.humidity);
      hum4.text("humidity : " + data.list[25].main.humidity);
      hum5.text("humidity : " + data.list[33].main.humidity);






    });



  });


  updateDisplay();
});
