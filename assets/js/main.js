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
var body = $("#body");
var nineAm = moment("09:00:00", format);
var tenAm = moment("10:00:00", format);
var elevenAm = moment("11:00:00", format);
var twelvePm = moment("12:00:00", format);
var onePm = moment("13:00:00", format);
var twoPm = moment("14:00:00", format);
var threePm = moment("15:00:00", format);
var fourPm = moment("16:00:00", format);
var fivePm = moment("17:00:00", format);
var sixPm = moment("18:00:00", format);
var tenPm = moment("22:00:00", format);
var elevenPm = moment("23:00:00", format);
var nineAmBox = $("#nineAmForm");
var tenAmBox = $("#tenAmForm");
var elevenAmBox = $("#elevenAmForm");
var twelvePmBox = $("#twelvePmForm");
var onePmBox = $("#onePmForm");
var twoPmBox = $("#twoPmForm");
var threePmBox = $("#threePmForm");
var fourPmBox = $("#fourPmForm");
var fivePmBox = $("#fivePmForm");

function presentTime(time1, time2, inputBox, src) {
  if (moment() >= time1 && moment() <= time2) {
    inputBox.addClass("present");
    body.addClass(src);
  }
}

function pastTime(time1, time2, inputBox) {
  if (moment() > time1 && moment() > time2) {
    inputBox.addClass("past");
  }
}

pastTime(nineAm, tenAm, nineAmBox);
pastTime(tenAm, elevenAm, tenAmBox);
pastTime(elevenAm, twelvePm, elevenAmBox);
pastTime(twelvePm, onePm, twelvePmBox);
pastTime(onePm, twoPm, onePmBox);
pastTime(twoPm, threePm, twoPmBox);
pastTime(threePm, fourPm, threePmBox);
pastTime(fourPm, fivePm, fourPmBox);
pastTime(fivePm, sixPm, fivePmBox);

function futureTime(time, inputBox) {
  if (moment() < time) {
    inputBox.addClass("future");
  }
}

futureTime(nineAm, nineAmBox);
futureTime(tenAm, tenAmBox);
futureTime(elevenAm, elevenAmBox);
futureTime(twelvePm, twelvePmBox);
futureTime(onePm, onePmBox);
futureTime(twoPm, twoPmBox);
futureTime(threePm, threePmBox);
futureTime(fourPm, fourPmBox);
futureTime(fivePm, fivePmBox);

// function whichTime(time1, time2, inputBox) {
//   if (moment() >= time1 && moment() <= time2) {
//     inputBox.addClass("present");
//   }
// }
presentTime(nineAm, tenAm, nineAmBox, "morningtime");
presentTime(tenAm, elevenAm, tenAmBox, "morningtime");
presentTime(elevenAm, twelvePm, elevenAmBox, "daytime");
presentTime(twelvePm, onePm, twelvePmBox, "daytime");
presentTime(onePm, twoPm, onePmBox, "daytime");
presentTime(twoPm, threePm, twoPmBox, "daytime");
presentTime(threePm, fourPm, threePmBox, "eveningtime");
presentTime(fourPm, fivePm, fourPmBox, "eveningtime");
presentTime(fivePm, sixPm, fivePmBox, "nightime");
presentTime(tenPm, elevenPm, nineAmBox, "nightime");
