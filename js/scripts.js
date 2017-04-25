var apikey = 'http://api.openweathermap.org/data/2.5/weather?appid=6771541381d6281c81e2c11bfc711495&units=imperial&q='




var button = document.getElementById('submit');

button.addEventListener("click", weatherAsk)

function weatherAsk(){
  // var url = api + input.value() + key + unit;
var city = document.getElementById('city').value;
  var url = apikey + city;


  $.getJSON( url, function(data) {
    //data is the JSON string

    var mainTemp = data.main.temp;
    var high = data.main.temp_max;
    var low = data.main.temp_min;
    var cityName = data.name;
    var description = data.weather[0].description;
    var wind =  data.wind.speed;
    var humidity = data.main.humidity;

    displayTempContainer(mainTemp, high, low);

    displayOther(description, wind, humidity);
    displayCity(cityName);
 });
}

function displayTempContainer(mainTemp, high, low) {

  var tempContainer = `
  <h3>Current Temperature: ${mainTemp} °F</h3>
  <h3>High Temperature: ${high} °F</h3>
  <h3>Low Temperature: ${low} °F</h3>
  `

  $('#temp-container').html(tempContainer)

}




function displayOther(description, wind, humidity) {

  var otherContainer = `
  <h3>${description}</h3>
  <h3>Wind: ${wind} mph</h3>
  <h3>Humidity: ${humidity} %</h3>

  `


  $('#other-container').html(otherContainer)

}

function displayCity(cityName) {

  var cityContainer = `
  <h2 class="city">${cityName}</h2>

  `

  $('#city-container').html(cityContainer)

}
