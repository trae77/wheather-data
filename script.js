$(document).ready(function () {
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

    var start = $("#search")
    var name =$("#city1")
    var temperature = $("#temp")
    var humidity = $("#hum")
    var wind = $("#wind")
    var uv = $("#uv")
    var day1 =$("#day1")
    var day2 =$("#day2")
    var day3 =$("#day3")
    var day4 =$("#day4")
    var day5 =$("#day5")
    var tem1 =$("#tem1")
    var tem2 =$("#tem2")
    var tem3 =$("#tem3")
    var tem4 =$("#tem4")
    var tem5 =$("#tem5")
    var hum1 =$("#hum1")
    var hum2 =$("#hum2")
    var hum3 =$("#hum3")
    var hum4 =$("#hum4")
    var hum5 =$("#hum5")






    start.on("click", function (e) {
        e.preventDefault();

        var city = $("#floatingInput").val().trim()
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=50735cce711c764de2fa4f86ca9affae"

        $.ajax({
           url: url,
           method: "GET"
        }).then(function(data){
            console.log(data)
            name.text("city name : " + data.city.name)
            temperature.text("temperature : " + data.list[0].main.temp)
            humidity.text("humidity : " + data.list[0].main.humidity)
            wind.text("wind : " + data.list[0].wind.speed)
            
            day1.text("day : " + data.list[8].dt_txt)
            day2.text("day : " + data.list[16].dt_txt)
            day3.text("day : " + data.list[24].dt_txt)
            day4.text("day : " + data.list[32].dt_txt)
            day5.text("day : " + data.list[39].dt_txt)
             
            tem1.text("tempurature : " + data.list[8].main.temp)
            tem2.text("tempurature  : " + data.list[16].main.temp)
            tem3.text("tempurature  : " + data.list[24].main.temp)
            tem4.text("tempurature  : " + data.list[32].main.temp)
            tem5.text("tempurature  : " + data.list[39].main.temp)
             
            hum1.text("humidity : " + data.list[8].main.humidity)
            hum2.text("humidity : " + data.list[16].main.humidity)
            hum3.text("humidity : " + data.list[24].main.humidity)
            hum4.text("humidity : " + data.list[32].main.humidity)
            hum5.text("humidity : " + data.list[39].main.humidity)

        })
    })

})
  // <script src= "api.openweathermap.org/data/2.5/weather?q={city name}&appid=50735cce711c764de2fa4f86ca9affae"

  // for loop increasing by 8 for each day since 