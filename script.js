window.addEventListener("load", (event) => {
  //add event listener to window get tag then change the text depenging on naviagotr api
  const statusDisplay = document.getElementById("status"); //get the paragram
  statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
});

window.addEventListener("offline", (event) => {
  //add event listener to window get tag then change the text depenging on naviagotr api
  const statusDisplay = document.getElementById("status"); //get the paragram
  statusDisplay.textContent = "Offline";
});

window.addEventListener("online", (event) => {
  //add event listener to window get tag then change the text depenging on naviagotr api
  const statusDisplay = document.getElementById("status"); //get the paragram
  statusDisplay.textContent = "Online";
});
