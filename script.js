const buttonL = document.getElementById("navbarL");
buttonL.addEventListener('click', function() {
  alert('These are my Projects!');
});

const buttonR = document.getElementById("navbarR");
buttonR.addEventListener('click', function () {
  alert("Here's my Resume!");
});

const h2 = document.querySelector('h2');

h2.onclick = function changeContent() {
  h2.textContent = "I am He // You are He as You are Me";
  h2.style = "Color: white";
  h2.style.transform = 'rotate(25deg)'; 
}

h2.addEventListener('dblclick', function () {
  h2.textContent = "REDRUM";
  h2.style = "Color: red";
  h2.style.transform = 'rotateY(180deg)'; 
});

