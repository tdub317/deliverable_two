//Initialize question and error msg variables
var askEvent = "What type of event are you going to?";
var askTemp = "What's the temperature in Fahrenheit today?";
var eventErrorMsg = "Please enter an event type (casual / semi-formal / formal)";
var tempErrorMsg = "Please enter a number";

//Prompt questions and change event type to lower case
var eventType = prompt(askEvent, "<event type goes here>");
var etLower = eventType.toLowerCase();

//Pop up error msg if questions aren't answered properly
if (etLower != "casual" && etLower != "semi-formal" && etLower != "formal") {
  alert(eventErrorMsg);
}
else {
  var tempFahr = prompt(askTemp, "temperature in F goes here>")
  if (tempFahr != parseFloat(tempFahr)) {
    alert(tempErrorMsg);
  }
}

//Initialize response to make it easier to read
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


//Conditional to determine what event/temperature and provide suggestion accordingly
if (etLower == "casual") {
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
else if (etLower == "semi-formal" || etLower == "semi formal" || etLower == "semiformal") {
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
else if (etLower == "formal") {
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
