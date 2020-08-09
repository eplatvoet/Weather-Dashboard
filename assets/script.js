$(function() {
    console.log( "ready!" );
});
  // API KEY
  var apiKey = "940bd19264df2f0bdcef88196b007f5f";

  //USER INPUT
  var userInput = $(".userInput").val();
  
  $("submitCity").on("click", function(){
      console.log(userInput);
      

//WEATHER EXAMPLE FROM CLASS

//       // Here we are building the URL we need to query the database    
//       var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//         userInput + "&appid=" + apiKey;

//         // Here we run our AJAX call to the OpenWeatherMap API
//           $.ajax({
//             url: queryURL,
//             method: "GET"
//           })
//           // We store all of the retrieved data inside of an object called "response"
//           .then(function(response) {
              
//               // Log the queryURL
//               console.log(queryURL);
              
//               // Log the resulting object
//               console.log(response);
              
//               // Transfer content to HTML
//               $(".city").html("<h3>" + response.name + " Weather:</h3>");
//               $(".wind").text("Wind Speed: " + response.wind.speed);
//               $(".humidity").text("Humidity: " + response.main.humidity);
              
//               // Convert the temp to fahrenheit
//               var tempF = (response.main.temp - 273.15) * 1.80 + 32;
              
//               // add temp content to html
//               $(".temp").text("Temperature (K) " + response.main.temp);
//               $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
              
//               // Log the data in the console as well
//               console.log("Wind Speed: " + response.wind.speed);
//               console.log("Humidity: " + response.main.humidity);
//               console.log("Temperature (F): " + tempF);
//     })
// });