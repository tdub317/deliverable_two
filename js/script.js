var askEvent = "What type of event are you going to?";
var askTemp = "What's the temperature in Fahrenheit today?";
var eventErrorMsg = "Please enter an event type (casual / semi-formal / formal)";
var tempErrorMsg = "Please enter a number";

var eventType = prompt(askEvent, "<event type goes here>");

if (eventType != "casual" && eventType != "semi-formal" && eventType != "formal") {
  alert(eventErrorMsg);
}
else {
  var tempFahr = prompt(askTemp, "temperature in F goes here>")
  if (tempFahr != parseFloat(tempFahr)) {
    alert(tempErrorMsg);
  }
}

var casualCold = "and you are going to a casual event, you should wear something comfy and a coat.";
var casualWarm = "and you are going to a casual event, you should wear something comfy and a jacket.";
var casualHot = "and you are going to a casual event, you should wear something comfy without a jacket.";
var semiformalCold = "and you are going to a semi-formal event, you should wear a polo and a coat.";
var semiformalWarm = "and you are going to a semi-formal event, you should wear a polo and a jacket.";
var semiformalHot = "and you are going to a semi-formal event, you should wear a polo without a jacket.";
var formalCold = "and you are going to a formal event, you should wear a suit and a coat.";
var formalWarm = "and you are going to a formal event, you should wear a suit and a jacket.";
var formalHot = "and you are going to a formal event, you should wear a suit without a jacket.";
var result;
var error = "Sorry, there has been an input error.";



if (eventType == "casual") {
  if (tempFahr < 54) {
    var result = "Since it is " + tempFahr + " degrees " + casualCold;
    console.log(result);
  }
  else if (tempFahr >= 54 && tempFahr <= 70){
    var result = "Since it is " + tempFahr + " degrees " + casualWarm;
    console.log(result);
  }
  else if (tempFahr >70) {
    var result = "Since it is " + tempFahr + " degrees " + casualHot;
    console.log(result);
  }
  else {
    console.log(error);
  }
}
else if (eventType == "semi-formal" || eventType == "semi formal" || eventType == "semiformal") {
  if (tempFahr < 54) {
    var result = "Since it is " + tempFahr + " degrees " + semiformalCold;
    console.log(result);
  }
  else if (tempFahr >= 54 && tempFahr <= 70) {
    var result = "Since it is " + tempFahr + " degrees " + semiformalWarm;
    console.log(result);
  }
  else if (tempFahr > 70) {
    var result = "Since it is " + tempFahr + " degrees " + semiformalHot;
    console.log(result);;
  }
  else {
    console.log(error);
  }
}
else if (eventType == "formal") {
    if (tempFahr < 54) {
      var result = "Since it is " + tempFahr + " degrees " + formalCold;
      console.log(result);
    }
    else if (tempFahr >= 54 && tempFahr <= 70) {
      var result = "Since it is " + tempFahr + " degrees " + formalWarm;
      console.log(result);
    }
    else if (tempFahr > 70) {
      var result = "Since it is " + tempFahr + " degrees " + formalHot;
      console.log(result);
    }
    else {
      console.log(error);
    }
}
else {
  console.log(error);
}
