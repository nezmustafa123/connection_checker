// window.addEventListener("load", (event) => {
//   //add event listener to window get tag then change the text depenging on naviagotr api
//   const statusDisplay = document.getElementById("status"); //get the paragram
//   statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
// });

// window.addEventListener("offline", (event) => {
//   //add event listener to window get tag then change the text depenging on naviagotr api
//   const statusDisplay = document.getElementById("status"); //get the paragram
//   statusDisplay.textContent = "Offline";
// });

// window.addEventListener("online", (event) => {
//   //add event listener to window get tag then change the text depenging on naviagotr api
//   const statusDisplay = document.getElementById("status"); //get the paragram
//   statusDisplay.textContent = "Online";
// });

// variables

const image = document.getElementById('image');
const statusDisplay = document.getElementById('status');
const bgColor = document.getElementById('main');

//fetch something external from server

async function connectionStatus () {
try {
  const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/6/61/Wikipedia-logo-transparent.png?time=' + (new Date()).getTime());
  image.src="";
}
}
