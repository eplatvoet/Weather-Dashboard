// https://api.openweathermap.org/data/2.5/weather?q= 
// &APPID=940bd19264df2f0bdcef88196b007f5f

$(document).ready(function () {
    
    //DATE AND TIME DISPLAYED
    $(".currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

    //FUNCTION FOR UPDATING TIME WITHOUT REFRESHING THE PAGE
    function updateClock() {
            $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
        }
        
        setInterval(updateClock, 1000);
        console.log("the current time is " + moment());

    //ONCE USER ENTERS CITY AND PRESSES BUTTON:
    $("#getWeatherForecast").click(function () {
        var city = $("#city").val();
        var apiKey = "&APPID=940bd19264df2f0bdcef88196b007f5f";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
        localStorage.setItem("City:", city);
        $(".searchHistory").val(localStorage.getItem("#city"));
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                //BEGIN DISPLAYING INFO FROM API
                $(".city").html("<h2>Currently in " + response.name + ":</h2><br>");

                //CONTINUING TO PULL INFO FROM API TO DISPLAY
                $(".weather").html("Conditions: " + response.weather[0].description + " <img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
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
                    console.log(queryTwo)
                    console.log(responseTwo)
                    $(".uvIndex").text("UV Index: "+ responseTwo.current.uvi);
                    
                    //add date to forecast
                    //FORECASTED DAY 1
                    $(".weatherOne").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[1].weather[0].icon + ".png'>");
                    var highOne = (responseTwo.daily[1].temp.max - 273.15) * 1.80 + 32;
                    var lowOne = (responseTwo.daily[1].temp.min - 273.15) * 1.80 + 32;
                    $(".highOne").html("High: " + highOne.toFixed(2) + "&deg;F");
                    $(".lowOne").html("Low: " + lowOne.toFixed(2) + "&deg;F");
                    $(".humidityOne").text("Humidity: " + responseTwo.daily[1].humidity + "%");
                    //FORECASTED DAY 2
                    $(".weatherTwo").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[2].weather[0].icon + ".png'>");
                    var highTwo = (responseTwo.daily[2].temp.max - 273.15) * 1.80 + 32;
                    var lowTwo = (responseTwo.daily[2].temp.min - 273.15) * 1.80 + 32;
                    $(".highTwo").html("High: " + highTwo.toFixed(2) + "&deg;F");
                    $(".lowTwo").html("Low: " + lowTwo.toFixed(2) + "&deg;F");
                    $(".humidityTwo").text("Humidity: " + responseTwo.daily[2].humidity + "%");
                    //FORECASTED DAY 3
                    $(".weatherThree").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[3].weather[0].icon + ".png'>");
                    var highThree = (responseTwo.daily[3].temp.max - 273.15) * 1.80 + 32;
                    var lowThree = (responseTwo.daily[3].temp.min - 273.15) * 1.80 + 32;
                    $(".highThree").html("High: " + highThree.toFixed(2) + "&deg;F");
                    $(".lowThree").html("Low: " + lowThree.toFixed(2) + "&deg;F");
                    $(".humidityThree").text("Humidity: " + responseTwo.daily[3].humidity + "%");
                    //FORECASTED DAY 4
                    $(".weatherFour").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[4].weather[0].icon + ".png'>");
                    var highFour = (responseTwo.daily[4].temp.max - 273.15) * 1.80 + 32;
                    var lowFour = (responseTwo.daily[4].temp.min - 273.15) * 1.80 + 32;
                    $(".highFour").html("High: " + highFour.toFixed(2) + "&deg;F");
                    $(".lowFour").html("Low: " + lowFour.toFixed(2) + "&deg;F");
                    $(".humidityFour").text("Humidity: " + responseTwo.daily[4].humidity + "%");
                    //FORECASTED DAY 5
                    $(".weatherFive").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[5].weather[0].icon + ".png'>");
                    var highFive = (responseTwo.daily[5].temp.max - 273.15) * 1.80 + 32;
                    var lowFive = (responseTwo.daily[5].temp.min - 273.15) * 1.80 + 32;
                    $(".highFive").html("High: " + highFive.toFixed(2) + "&deg;F");
                    $(".lowFive").html("Low: " + lowFive.toFixed(2) + "&deg;F");
                    $(".humidityFive").text("Humidity: " + responseTwo.daily[5].humidity + "%");

                })
            })
    })
});