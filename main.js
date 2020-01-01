var direction
var tempo
var distance
var timerVar
var seconds
var center

tempo = 30

function tempoUp() { 
  tempo = tempo + 1
  document.getElementById("tempo").innerHTML = tempo
 }
 function tempoDown() { 
  tempo = tempo - 1
  document.getElementById("tempo").innerHTML = tempo
 }
function right() { 
  direction = "right"
  document.getElementById("left").style.backgroundColor = "white"
  document.getElementById("left").style.color = "black"
  document.getElementById("right").style.backgroundColor = "blue"
  document.getElementById("right").style.color = "white"
 }
 function left() { 
  direction = "left"
  document.getElementById("right").style.backgroundColor = "white"
  document.getElementById("right").style.color = "black"
  document.getElementById("left").style.backgroundColor = "blue"
  document.getElementById("left").style.color = "white"
 }
 function one() { 
  distance = "one"
  document.getElementById("two").style.backgroundColor = "white"
  document.getElementById("two").style.color = "black"
  document.getElementById("three").style.backgroundColor = "white"
  document.getElementById("three").style.color = "black"
  document.getElementById("four").style.backgroundColor = "white"
  document.getElementById("four").style.color = "black"
  document.getElementById("five").style.backgroundColor = "white"
  document.getElementById("five").style.color = "black"
  document.getElementById("one").style.backgroundColor = "blue"
  document.getElementById("one").style.color = "white"
 }

 function two() { 
  distance = "two"
  document.getElementById("one").style.backgroundColor = "white"
  document.getElementById("one").style.color = "black"
  document.getElementById("three").style.backgroundColor = "white"
  document.getElementById("three").style.color = "black"
  document.getElementById("four").style.backgroundColor = "white"
  document.getElementById("four").style.color = "black"
  document.getElementById("five").style.backgroundColor = "white"
  document.getElementById("five").style.color = "black"
  document.getElementById("two").style.backgroundColor = "blue"
  document.getElementById("two").style.color = "white"
 }
 function three() { 
  distance = "three"
  document.getElementById("one").style.backgroundColor = "white"
  document.getElementById("one").style.color = "black"
  document.getElementById("two").style.backgroundColor = "white"
  document.getElementById("two").style.color = "black"
  document.getElementById("four").style.backgroundColor = "white"
  document.getElementById("four").style.color = "black"
  document.getElementById("five").style.backgroundColor = "white"
  document.getElementById("five").style.color = "black"
  document.getElementById("three").style.backgroundColor = "blue"
  document.getElementById("three").style.color = "white"
 }
 function four() { 
  distance = "four"
  document.getElementById("one").style.backgroundColor = "white"
  document.getElementById("one").style.color = "black"
  document.getElementById("two").style.backgroundColor = "white"
  document.getElementById("two").style.color = "black"
  document.getElementById("three").style.backgroundColor = "white"
  document.getElementById("three").style.color = "black"
  document.getElementById("five").style.backgroundColor = "white"
  document.getElementById("five").style.color = "black"
  document.getElementById("four").style.backgroundColor = "blue"
  document.getElementById("four").style.color = "white"
 }
 function five() { 
  distance = "five"
  document.getElementById("one").style.backgroundColor = "white"
  document.getElementById("one").style.color = "black"
  document.getElementById("two").style.backgroundColor = "white"
  document.getElementById("two").style.color = "black"
  document.getElementById("three").style.backgroundColor = "white"
  document.getElementById("three").style.color = "black"
  document.getElementById("four").style.backgroundColor = "white"
  document.getElementById("four").style.color = "black"
  document.getElementById("five").style.backgroundColor = "blue"
  document.getElementById("five").style.color = "white"
 }
 function start() {
  seconds = ((60/tempo)/2)*1000
  clearInterval(timerVar)
  center = true
  timerVar = setInterval(movement, seconds);
 }
 function movement(){
   if (center === true) {
    document.getElementById("dot").className = "dot " + direction + distance
    center = false
  } else {
    document.getElementById("dot").className = "dot center"
    center = true
   }

 }
 function stop() {
   clearInterval(timerVar)
   document.getElementById("dot").className = "dot center"
 }

 document.getElementById("start").addEventListener("click", start);
 document.getElementById("stop").addEventListener("click", stop);

 document.getElementById("faster").addEventListener("click", tempoUp);
 document.getElementById("slower").addEventListener("click", tempoDown);
 document.getElementById("right").addEventListener("click", right);
 document.getElementById("left").addEventListener("click", left);
 document.getElementById("one").addEventListener("click", one);
 document.getElementById("two").addEventListener("click", two);
 document.getElementById("three").addEventListener("click", three);
 document.getElementById("four").addEventListener("click", four);
 document.getElementById("five").addEventListener("click", five);
 