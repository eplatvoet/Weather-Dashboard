// https://api.openweathermap.org/data/2.5/weather?q= 
// &APPID=940bd19264df2f0bdcef88196b007f5f

$(document).ready(function() {
    $("#getWeatherForecast").click(function(){
        var city = $("#city").val();
        var apiKey = "&APPID=940bd19264df2f0bdcef88196b007f5f";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            console.log(queryURL);
            console.log(response);
            $(".city").html("<h1>" + response.name + " Weather Information</h1><br>");
            $(".coordination").text("Coordinates: Lat:" + response.coord.lat + ", Lon: " + response.coord.lat)
            $(".weather").html("Current Weather: " + response.weather[0].description + " <img src=" + response.weather[0].icon +".png>")
            $(".temp").text("Current Temperature: " + " (Feels Like: " + ")")
            $(".wind").text("Wind Speed: " + response.wind.speed + "mph");
            $(".humidity").text("Humidity: " + response.main.humidity + "%");
        })
    })
});