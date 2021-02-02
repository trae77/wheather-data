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
    
    
    start.on("click", function (e) {
        e.preventDefault();

        var city = $("#floatingInput").val().trim()
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=50735cce711c764de2fa4f86ca9affae"

        $.ajax({
           url: url,
           method: "GET"
        }).then(function(data){
            console.log(data)
            name.text(data.name)
        })
    })

})
  // <script src= "api.openweathermap.org/data/2.5/weather?q={city name}&appid=50735cce711c764de2fa4f86ca9affae"

  // for loop increasing by 8 for each day since 