console.log("I am connected");
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if (s < 10) {
    s = "0" + s

  }
  if (m < 10) {
    m = "0" + m
  }
  if (h < 10) {
      h = "0" + h
  }
  var time = h + ":" + m + ":" + s;
  document.getElementById("ClockDisplay").innerText = time;
  document.getElementById("ClockDisplay").innerContent = time;
  setTimeout(showTime, 1000);


}
showTime()
