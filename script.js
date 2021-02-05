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

    var history = document.getElementsByClassName("btn-group-vertical")

var dataArray = []


// history.innerHTML("hi")



//   var history2 = localStorage.getItem(names)




    
        
// history.innerHTML(history2)
    

    start.on("click", function (e) {
        e.preventDefault();

        var city = $("#floatingInput").val().trim()
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=50735cce711c764de2fa4f86ca9affae"
       
        https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}

        $.ajax({
           url: url,
           method: "GET"
        }).then(function cityWheather(data){
            dataArray.push(data)
           localStorage.setItem("names", JSON.stringify(data.city.name));
        
 
            console.log(data)
        console.log(dataArray);
        
            name.text("city name : " + data.city.name)
            temperature.text("temperature : " + data.list[0].main.temp)
            humidity.text("humidity : " + data.list[0].main.humidity)
            wind.text("wind : " + data.list[0].wind.speed)
            
            day1.text("day : " + data.list[1].dt_txt)
            day2.text("day : " + data.list[8].dt_txt)
            day3.text("day : " + data.list[16].dt_txt)
            day4.text("day : " + data.list[24].dt_txt)
            day5.text("day : " + data.list[33].dt_txt)
             
            tem1.text("tempurature : " + data.list[1].main.temp)
            tem2.text("tempurature  : " + data.list[8].main.temp)
            tem3.text("tempurature  : " + data.list[16].main.temp)
            tem4.text("tempurature  : " + data.list[24].main.temp)
            tem5.text("tempurature  : " + data.list[32].main.temp)
             
            hum1.text("humidity : " + data.list[1].main.humidity)
            hum2.text("humidity : " + data.list[8].main.humidity)
            hum3.text("humidity : " + data.list[16].main.humidity)
            hum4.text("humidity : " + data.list[24].main.humidity)
            hum5.text("humidity : " + data.list[32].main.humidity)
             


            
        

return ;

});
});




        // $( "#btn-group-vertical" ).click(function() {
            
        

        // localStorage.getItem("history")
            

        
        //         }); 


  // for loop increasing by 8 for each day since 

            
 }) 
