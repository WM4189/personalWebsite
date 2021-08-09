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
  h2.style.transform = 'skewX(25deg)'; 
}

h2.addEventListener('dblclick', function () {
  h2.textContent = "Aibohphobia";
  h2.style = "Color: red";
  h2.style.transform = 'rotateY(180deg)'; 
});

document.addEventListener('keydown', function () {
  if (h2.textContent === "Aibohphobia") {
    for (let i = 0; i < 10; i++) {
      h2.textContent  += `   level  radar  noon  civic    `;
  } } else if (h2.textContent === "I am He // You are He as You are Me") {
      h2.textContent += ' // We are All Together';
      } 
});

