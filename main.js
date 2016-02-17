console.log('Hello world');

$.getJSON('http://api.openweathermap.org/data/2.5/forecast?q=n52nh,uk&mode=json&appid=44db6a862fba0b067b1930da0d769e98', function(data) {
  if (data.list[0].rain["3h"] > 0) {
    $('.weather').text("Pack a brolly!")
  }
  else {
    $('.weather').text("No need for a brolly today sunshine ;)")
  }
});
