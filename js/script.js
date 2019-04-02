//declared variables and initialize them with questions and error msgs
var askEvent = "What type of event are you going to?";
var askTemp = "What's the temperature in Fahrenheit today?";
var eventErrorMsg = "Please enter an event type (casual / semi-formal / formal)";
var tempErrorMsg = "Please enter temperature as numbers";

//declared variables and initialize eventType (REQUIRED)
//also changed event type string to lower case
var eventType = prompt(askEvent, "<enter event type (casual / semi-formal / formal)>");
var etLower = eventType.toLowerCase();
var eventCheck = ["casual", "semi-formal", "semiformal", "semi formal", "formal"];

//Pop up error msg if questions aren't answered properly
//if (etLower != "casual" && etLower != "semi-formal" && etLower != "semi formal" && etLower != "semiformal" && etLower != "formal") {
//  alert(eventErrorMsg);
//}
//else {
//  var tempFahr = prompt(askTemp, "temperature in F goes here>")
//  if (tempFahr != parseFloat(tempFahr)) {
//    alert(tempErrorMsg);
//  }
//}

//Cleaner version of what I was trying to achieve above (error msg)
if (eventCheck.includes(etLower)) {
  //declared and initalized tempFahr (REQUIRED)
  var tempFahr = prompt(askTemp, "<temperature in F goes here>");
  if (tempFahr != parseFloat(tempFahr)) {
    alert(tempErrorMsg);
  }
}
else {
  alert(eventErrorMsg);
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

//declared and initalized result (REQUIRED); result is a single string but changes depending on condition
//results are logged to console (REQUIRED)
//casual event = something comfy (REQUIRED)
//<54 degrees = a coat / >=54 && <=70 degrees = a jacket / >70 degrees = no jacket (REQUIRED)
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
//semi-formal event = a polo (REQUIRED)
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
//formal event = a suit (REQUIRED)
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
