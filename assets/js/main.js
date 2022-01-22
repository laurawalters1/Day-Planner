// Setting date display for header

function displayTime() {
  setInterval(function () {
    var reformatDate = moment().format("dddd, MMMM Do YYYY");
    var reformatTime = moment().format("HH:mm:ss");
    $("#currentDay").text(reformatDate);
    $("#currentTime").text(reformatTime);
  }, 1000);
}

displayTime();

// Declaring variables for each hour to compare momement to
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
var twelveAm = moment("23:59:00", format);
var oneAm = moment("00:01:00", format);
var eightAm = moment("08:59:00", format);

// Declaring variables for each time-block

var nineAmBox = $("#nineAmForm");
var tenAmBox = $("#tenAmForm");
var elevenAmBox = $("#elevenAmForm");
var twelvePmBox = $("#twelvePmForm");
var onePmBox = $("#onePmForm");
var twoPmBox = $("#twoPmForm");
var threePmBox = $("#threePmForm");
var fourPmBox = $("#fourPmForm");
var fivePmBox = $("#fivePmForm");

// Function checks if current time is between time 1 and time 2 parameters
// If yes, adds present class to inputbox and sets the background image to the body
// So that this can change throughout the day

function presentTime(time1, time2, inputBox, src) {
  if (moment() >= time1 && moment() <= time2) {
    inputBox.addClass("present");
    body.addClass(src);
  }
}

// Function checks if moment is greater than two parameters, if so it adds the class of past
// To the relevant input box

function pastTime(time1, time2, inputBox) {
  if (moment() > time1 && moment() > time2) {
    inputBox.addClass("past");
  }
}

// Calling past time function and passing in the correct parameters

pastTime(nineAm, tenAm, nineAmBox);
pastTime(tenAm, elevenAm, tenAmBox);
pastTime(elevenAm, twelvePm, elevenAmBox);
pastTime(twelvePm, onePm, twelvePmBox);
pastTime(onePm, twoPm, onePmBox);
pastTime(twoPm, threePm, twoPmBox);
pastTime(threePm, fourPm, threePmBox);
pastTime(fourPm, fivePm, fourPmBox);
pastTime(fivePm, sixPm, fivePmBox);

// Checking that current time is less than a given time, if so the class of future is added to the
// relevant input box

function futureTime(time, inputBox) {
  if (moment() < time) {
    inputBox.addClass("future");
  }
}

// Calling future time functions with the relevant parameters

futureTime(nineAm, nineAmBox);
futureTime(tenAm, tenAmBox);
futureTime(elevenAm, elevenAmBox);
futureTime(twelvePm, twelvePmBox);
futureTime(onePm, onePmBox);
futureTime(twoPm, twoPmBox);
futureTime(threePm, threePmBox);
futureTime(fourPm, fourPmBox);
futureTime(fivePm, fivePmBox);

// Function checks if current time falls outside of the specified time blocks and adds background
// img accordingly

function morningOrNight(time1, time2, src) {
  if (moment() >= time1 && moment() <= time2) {
    body.addClass(src);
  }
}

// Calling morning or night function with the correct parameters

morningOrNight(oneAm, eightAm, "morningtime");
presentTime(nineAm, tenAm, nineAmBox, "morningtime");
presentTime(tenAm, elevenAm, tenAmBox, "morningtime");
presentTime(elevenAm, twelvePm, elevenAmBox, "daytime");
presentTime(twelvePm, onePm, twelvePmBox, "daytime");
presentTime(onePm, twoPm, onePmBox, "daytime");
presentTime(twoPm, threePm, twoPmBox, "daytime");
presentTime(threePm, fourPm, threePmBox, "eveningtime");
presentTime(fourPm, fivePm, fourPmBox, "eveningtime");
presentTime(fivePm, sixPm, fivePmBox, "nightime");
// presentTime(tenPm, elevenPm, nineAmBox, "nightime");
morningOrNight(sixPm, twelveAm, "nightime");

// Declaring buttons and input forms,

var nineAmButton = $("#nineAmBtn");
var nineAmForm = $("#nineAmForm");
var nineAmText = $("#nineAmText");

var tenAmButton = $("#tenAmBtn");
var tenAmForm = $("#tenAmForm");
var tenAmText = $("#tenAmText");

var elevenAmButton = $("#elevenAmBtn");
var elevenAmForm = $("#elevenAmForm");
var elevenAmText = $("#elevenAmText");

var twelvePmButton = $("#twelvePmBtn");
var twelvePmForm = $("#twelvePmForm");
var twelvePmText = $("#twelvePmText");

var onePmButton = $("#onePmBtn");
var onePmForm = $("#onePmForm");
var onePmText = $("#onePmText");

var twoPmButton = $("#twoPmBtn");
var twoPmForm = $("#twoPmForm");
var twoPmText = $("#twoPmText");

var threePmButton = $("#threePmBtn");
var threePmForm = $("#threePmForm");
var threePmText = $("#threePmText");

var fourPmButton = $("#fourPmBtn");
var fourPmForm = $("#fourPmForm");
var fourPmText = $("#fourPmText");

var fivePmButton = $("#fivePmBtn");
var fivePmForm = $("#fivePmForm");
var fivePmText = $("#fivePmText");

// addToStorage function sets user input to local storage

function addToStorage(form, storageKey, text) {
  form.on("submit", function (event) {
    event.preventDefault();
    // console.log(nineAmText.val());
    localStorage.setItem(storageKey, text.val());
  });
}

// Calling add to storage with correct parameters

addToStorage(nineAmForm, "nineAmStorage", nineAmText);
addToStorage(tenAmForm, "tenAmStorage", tenAmText);
addToStorage(elevenAmForm, "elevenAmStorage", elevenAmText);
addToStorage(twelvePmForm, "twelvePmStorage", twelvePmText);
addToStorage(onePmForm, "onePmStorage", onePmText);
addToStorage(twoPmForm, "twoPmStorage", twoPmText);
addToStorage(threePmForm, "threePmStorage", threePmText);
addToStorage(fourPmForm, "fourPmStorage", fourPmText);
addToStorage(fivePmForm, "fivePmStorage", fivePmText);

// Setting the text content of the input boxes to be equal to the last thing that was saved into local storage

nineAmText.text(localStorage.getItem("nineAmStorage"));
tenAmText.text(localStorage.getItem("tenAmStorage"));
elevenAmText.text(localStorage.getItem("elevenAmStorage"));
twelvePmText.text(localStorage.getItem("twelvePmStorage"));
onePmText.text(localStorage.getItem("onePmStorage"));
twoPmText.text(localStorage.getItem("twoPmStorage"));
threePmText.text(localStorage.getItem("threePmStorage"));
fourPmText.text(localStorage.getItem("fourPmStorage"));
fivePmText.text(localStorage.getItem("fivePmStorage"));
