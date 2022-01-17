function displayTime() {
  setInterval(function () {
    var reformatDate = moment().format("YYYY-MM-DD  HH:mm:ss");
    $("#currentDay").text(reformatDate);
  }, 1000);
}

displayTime();

// $("#9am").on("click", function () {
//   console.log("click");
//   $("#9am-form").addClass("present", 1000, callback);
// });
// function callback() {
//   setTimeout(function () {
//     $("#effect").removeClass("present");
//   }, 1500);
// }

console.log(moment().format("YY-MM-DD HH:mm:ss"));

var time = moment();

var format = "HH:mm:ss";

console.log(time);

var nineAm = moment("09:00:00", format);
var tenAm = moment("10:00:00", format);
var elevenAm = moment("11:00:00", format);
var twelvePm = moment("12:00:00", format);
var onePm = moment("13:00:00", format);
var twoPm = moment("14:00:00", format);
var threePm = moment("15:00:00", format);
var fourPm = moment("16:00:00", format);
var fivePm = moment("17:00:00", format);
