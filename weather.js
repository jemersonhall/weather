$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "The current temperature is: " + data.currently.temperature + " F.   " + 
      " Conditions are currently: " + data.currently.summary;

    var markup2 = " Tomorrow there is a high temperature of: " + data.daily.data[0].temperatureMax + "F " +
      " with a low temperature of: " + data.daily.data[0].temperatureMin + "F." + "  Conditions will be " + data.daily.data[0].summary;

    var markup3 = " Two days from now the high temperature is: " + data.daily.data[1].temperatureMax + "F " +
        " with a low temperature will be: " + data.daily.data[1].temperatureMin + "F." + "  Conditions will be " + data.daily.data[1].summary;

    var markup4 = " Three days from now the high temperature is: " + data.daily.data[2].temperatureMax + "F " +
          " with a low temperature will be: " + data.daily.data[2].temperatureMin + "F." + "  Conditions will be " + data.daily.data[2].summary;
    // End of your code

    $('.weather-report').html(markup)
    $('.weather-report2').html(markup2)
    $('.weather-report3').html(markup3)
    $('.weather-report4').html(markup4);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});