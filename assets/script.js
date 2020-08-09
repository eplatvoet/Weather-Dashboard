// https://api.openweathermap.org/data/2.5/weather?q= 
// &APPID=940bd19264df2f0bdcef88196b007f5f

$(document).ready(function () {
    // //DATE AND TIME DISPLAYED
    // $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // //FUNCTION FOR UPDATING TIME WITHOUT REFRESHING THE PAGE
    // function updateClock() {
    //         $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    //     }

    //     setInterval(updateClock, 1000);
    //     console.log("the current time is " + moment());

    //ONCE USER ENTERS CITY AND PRESSES BUTTON:
    $("#getWeatherForecast").click(function () {
        var city = $("#city").val();
        var apiKey = "&APPID=940bd19264df2f0bdcef88196b007f5f";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                //BEGIN DISPLAYING INFO FROM API
                $(".city").html("<h2>" + response.name + " Weather Information</h2><br>");

                //CONTINUING TO PULL INFO FROM API TO DISPLAY
                $(".weather").html("Current Weather: " + response.weather[0].description + " <img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
                $(".coordination").text("Coordinates: Lat:" + response.coord.lat + ", Lon: " + response.coord.lon)
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                var tempFeels = (response.main.feels_like - 273.15) * 1.80 + 32;
                $(".temp").html("Current Temperature: " + tempF.toFixed(2) + "&deg;F");
                $(".tempFeels").html("Feels Like: " + tempFeels.toFixed(2) +"&deg;F");
                $(".humidity").text("Humidity: " + response.main.humidity + "%");
                $(".wind").text("Wind Speed: " + response.wind.speed + "mph");

                var lat = response.coord.lat
                var lon = response.coord.lon
                var queryTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + apiKey;
                $.ajax({
                    url: queryTwo,
                    method: "GET"
                })
                .then(function(responseTwo) {
                    console.log(responseTwo)
                    $(".uvIndex").text("UV Index: "+ responseTwo.current.uvi);
                })
            })
    })
});