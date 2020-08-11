$(document).ready(function () {
    var city = $("#city")

    //ONCE USER ENTERS CITY AND PRESSES BUTTON:
    $("#getWeatherForecast").click(function () {
        city = $("#city").val();
        displayInformation();
    });
    // //close first on click function

    // //write another on click function for storage
    //STORING CITIES TO LOCAL STORAGE & BUTTONS
    var storage = JSON.parse(window.localStorage.getItem("Cities: ")) || [];
    console.log(storage);
    for (i = 0; i < storage.length; i++) {
        var cityList = $("<button>").html(storage[i]);
        $("<button>").addClass("savedCity")
        $("<button>").attr("id", "city")
        $(".searchHistory").append(cityList);
    }

    // FUNCTION FOR BUTTONS TO DISPLAY THEIR WEATHER INFO ON CLICK
    $("savedCity").click(function () {
        displayInformation();
    })

    //RETRIEVING INFORMTION FROM OPENWEATHER API: CURRENT WEATHER DATA

    function displayInformation() {
        var apiKey = "&APPID=940bd19264df2f0bdcef88196b007f5f";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);
                storage.push(city);
                window.localStorage.setItem("Cities: ", JSON.stringify(storage));
                //DATE AND TIME DISPLAYED
                $(".currentDay").text("Current Date & Time: " + moment().format('MMMM Do YYYY, h:mm a'));

                //FUNCTION FOR UPDATING TIME WITHOUT REFRESHING THE PAGE
                function updateClock() {
                    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
                }

                setInterval(updateClock, 1000);

                //BEGIN DISPLAYING INFO FROM API
                $(".city").html("<h2>Currently in " + response.name + ":</h2><br>");

                //CONTINUING TO PULL INFO FROM API TO DISPLAY
                $(".weather").html("Conditions: " + response.weather[0].description + " <img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png'>");
                $(".coordination").text("Coordinates: Lat:" + response.coord.lat + ", Lon: " + response.coord.lon)
                var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                var tempFeels = (response.main.feels_like - 273.15) * 1.80 + 32;
                $(".temp").html("Current Temperature: " + tempF.toFixed(2) + "&deg;F");
                $(".tempFeels").html("Feels Like: " + tempFeels.toFixed(2) + "&deg;F");
                $(".humidity").text("Humidity: " + response.main.humidity + "%");
                $(".wind").text("Wind Speed: " + response.wind.speed + "mph");

                //SETTING VARIABLES TO RETRIEVE INFORMATION FROM ANOTHER API
                var lat = response.coord.lat
                var lon = response.coord.lon
                var queryTwo = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + apiKey;

                //RETRIEVING MORE INFORMATION FROM OPENWEATHER API: ONE CALL API
                $.ajax({
                    url: queryTwo,
                    method: "GET"
                })
                    .then(function (responseTwo) {
                        console.log(queryTwo)
                        console.log(responseTwo)
                        $(".uvIndex").text("UV Index: " + responseTwo.current.uvi);
                        console.log(parseInt(responseTwo.current.uvi))
                        //CHANGING COLOR FOR THE UV INDEX
                        if (parseInt(responseTwo.current.uvi) >= 8) {
                            $(".uvIndex").addClass("severe");
                        } else if (parseInt(responseTwo.current.uvi) < 8 && parseInt(responseTwo.current.uvi) > 4) {
                            $(".uvIndex").addClass("moderate");
                        } else {
                            $(".uvIndex").addClass("favorable")
                        };


                        //* ADD DATE TO FORECAST *
                        //FORECASTED DAY 1
                        $(".dateOne").text(moment().add(1, "d").format('MMMM Do YYYY'));
                        $(".weatherOne").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[1].weather[0].icon + ".png'>");
                        var highOne = (responseTwo.daily[1].temp.max - 273.15) * 1.80 + 32;
                        var lowOne = (responseTwo.daily[1].temp.min - 273.15) * 1.80 + 32;
                        $(".highOne").html("High: " + highOne.toFixed(2) + "&deg;F");
                        $(".lowOne").html("Low: " + lowOne.toFixed(2) + "&deg;F");
                        $(".humidityOne").text("Humidity: " + responseTwo.daily[1].humidity + "%");

                        //FORECASTED DAY 2
                        $(".dateTwo").text(moment().add(2, "d").format('MMMM Do YYYY'));
                        $(".weatherTwo").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[2].weather[0].icon + ".png'>");
                        var highTwo = (responseTwo.daily[2].temp.max - 273.15) * 1.80 + 32;
                        var lowTwo = (responseTwo.daily[2].temp.min - 273.15) * 1.80 + 32;
                        $(".highTwo").html("High: " + highTwo.toFixed(2) + "&deg;F");
                        $(".lowTwo").html("Low: " + lowTwo.toFixed(2) + "&deg;F");
                        $(".humidityTwo").text("Humidity: " + responseTwo.daily[2].humidity + "%");

                        //FORECASTED DAY 3
                        $(".dateThree").text(moment().add(3, "d").format('MMMM Do YYYY'));
                        $(".weatherThree").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[3].weather[0].icon + ".png'>");
                        var highThree = (responseTwo.daily[3].temp.max - 273.15) * 1.80 + 32;
                        var lowThree = (responseTwo.daily[3].temp.min - 273.15) * 1.80 + 32;
                        $(".highThree").html("High: " + highThree.toFixed(2) + "&deg;F");
                        $(".lowThree").html("Low: " + lowThree.toFixed(2) + "&deg;F");
                        $(".humidityThree").text("Humidity: " + responseTwo.daily[3].humidity + "%");

                        //FORECASTED DAY 4
                        $(".dateFour").text(moment().add(4, "d").format('MMMM Do YYYY'));
                        $(".weatherFour").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[4].weather[0].icon + ".png'>");
                        var highFour = (responseTwo.daily[4].temp.max - 273.15) * 1.80 + 32;
                        var lowFour = (responseTwo.daily[4].temp.min - 273.15) * 1.80 + 32;
                        $(".highFour").html("High: " + highFour.toFixed(2) + "&deg;F");
                        $(".lowFour").html("Low: " + lowFour.toFixed(2) + "&deg;F");
                        $(".humidityFour").text("Humidity: " + responseTwo.daily[4].humidity + "%");

                        //FORECASTED DAY 5
                        $(".dateFive").text(moment().add(5, "d").format('MMMM Do YYYY'));
                        $(".weatherFive").html("<img src='https://openweathermap.org/img/w/" + responseTwo.daily[5].weather[0].icon + ".png'>");
                        var highFive = (responseTwo.daily[5].temp.max - 273.15) * 1.80 + 32;
                        var lowFive = (responseTwo.daily[5].temp.min - 273.15) * 1.80 + 32;
                        $(".highFive").html("High: " + highFive.toFixed(2) + "&deg;F");
                        $(".lowFive").html("Low: " + lowFive.toFixed(2) + "&deg;F");
                        $(".humidityFive").text("Humidity: " + responseTwo.daily[5].humidity + "%");

                    });
            });
    };
});