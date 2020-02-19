// Your code goes here


//////////////mouse over//////////////
let nav = document.querySelector("nav")

nav.addEventListener("mouseover", function( event ){
event.target.style.color = "red";
setTimeout(function(){
    event.target.style.color = "";
},500);
},false);
/////////////////////////////////////





/////////////keydown////////////////
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if(key.keyCode == "65"){
        alert("The 'a' letter key has been pressed!!!")
    }
}
/////////////////////





////////////wheel//////////
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.sandbus');
  el.onwheel = zoom;
///////////////////////





/////////drag/drop////////
var id;
function allowDrop(ev){
    ev.preventDefault();
}

function dragStart(ev){
id=ev.target.id;
}
function drop(ev){
    ev.target.append(document.getElementById(id));
}
//////////////////////////







//////////////load//////////
window.addEventListener("load", function(){
    alert("PAGE IS LOADED")
});
/////////////////////////////






//////////focus///////////////
document.getElementById("fname").addEventListener("focus", myFunction);
function myFunction(){
    document.getElementById("fname").style.backgroundColor = "red";
}

//////////////////////////////





/////////resize///////////
window.addEventListener("resize", function(){console.log('resize!')},true);
///////////////////////////






/////////scroll////////////
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(Math.ceil(scrolled) === scrollable){
        alert('You have reached the bottom!');
    }
});
/////////////////////////






/////////select////////////







////////////////////////







//////////doubleclick///////////


function myFunction(){
    document.getElementById("demo").innerHTML = "I was double-clicked!";
}

/////////////////////////////







/////////////////prevent default///////////////
const navlink = document.getElementsByClassName('.nav-link');
navlink.addEventListener.forEach('click', function(e){
    e.preventDefault();
});