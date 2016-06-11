window.addEventListener("load", dofirst);

function dofirst() {
   document.getElementById("btnCheck").addEventListener("click", checkValue);
   document.getElementById("btnLoop").addEventListener("click",loopValue);
   }

function loopValue() {
var i = 1;
var buttonsHTML = "";
var testVar;
testVar = document.getElementById("txtB").value;

while (i <= testVar) {
   buttonsHTML = buttonsHTML + '<section><h1>What is Lorem Ipsum?<article><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' + i + '<p/></article></h1></section>';
   i++
   };
   document.getElementById("buttons").innerHTML = buttonsHTML;
   }

// Loops
function checkValue() {
   var userInput;
   var userInput = document.getElementById("userInput").value;

   if (userInput > 100) {
      document.getElementById("answer").innerHTML = userInput + " is greater than 100!";
   }else if (userInput > 50){
      document.getElementById("answer").innerHTML = userInput + " is greater than 50";
   } else {
      document.getElementById("answer").innerHTML = userInput + " is less than 50";
   }
};


//Ask Karim tomorrow morning!!!!
function showImage() {
   // var bigInput;
   console.log("hello i'm in show Image func")
   var bigInput = document.getElementById("bigInput");
   console.log(bigInput);
   if (bigInput > 9000) {

         document.getElementById("lol").style.visibility = show;
      // }
   }else {
      document.getElementById("hue").innerHTML = bigInput + " needs more power!";
   }
};

// Step 12



// // Running App
// Var avgSpeed = {
//    document.getElementsById("s1") +
//    document.getElementsById("s2") +
//    document.getElementsById("s3") +
//    document.getElementsById("s4") +
//    document.getElementsById("s5") +
//    document.getElementsById("s6") +
//    document.getElementsById("s7") +
//    document.getElementsById("s8") +
//    document.getElementsById("s9") +
//    document.getElementsById("s10") +
//    document.getElementsById("s11") +
//    document.getElementsById("s12") +
// }
// console.log(avgSpeed);
//
// function runSpeed() {
//
// }
