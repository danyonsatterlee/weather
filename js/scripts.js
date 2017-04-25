var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var key = '&APPID=6771541381d6281c81e2c11bfc711495='
var unit = 'imperial'

 var input;



function setup(){
  if {var button = select('#submit');
  button.mousePressed(weatherQuery);
  input = select('#city');
}
else {(!city) alert('Please enter a destination.');
}

  function weatherQuery(){
    var url = api + input.value(); + key + unit
    loadJSON(url,gotData);


  }
  function gotData(data){
    weather = data;

  }
