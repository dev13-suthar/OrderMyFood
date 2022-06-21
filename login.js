/*var myheader = document.querySelector("h1");
myheader.style.color = 'blue';

function randomcolor(){
    var inputer  = "123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += inputer[Math.floor(Math.random()*16)];
      }
      return color;
    }

function changeheadcolor(){
    colorinput = getRandomColor();
    myheader.style.color = colorinput;
}

setInterval("changeheadcolor()",500);*/






// Grab the Header with h1
/*var header = document.querySelector('h1')


// Then you can interface with the object.

// Interface with the style.
//You will see a ton of options show up!
//header.style.color = 'red'

// Now let's connect it to the script to
// change it once every second to a random color!

// Random Color Function:

// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()",1000);


 /*var x = document.getElementById('img1')
 function change_back(){
   x.addEventListener('hower')
   x.style.background = 
 }*/

/*var header = document.getElementById('headone');
header.style.color = 'red';*/

var button = document.getElementById('btn1')

button.addEventListener('mouseover', function(){
  button.style.background = 'pink'
})

button.addEventListener('mouseout', function(){
  button.style.background = 'white'
})

var butn2 = document.getElementById('butn1')

var contact = document.getElementById('con')
contact.addEventListener('click',function(){
    alert("Scroll Down For Contact US")
})


