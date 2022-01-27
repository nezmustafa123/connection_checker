// variables

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColour = document.getElementById("main");

function setColour() {
  bgColour.classList.add("online");
}
//fetch something external from server

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Wikipedia-logo-transparent.png?time=" +
        new Date().getTime()
    );
    image.src = "./images/online.png";
    setColour();
    statusDisplay.textContent = "Internet Connection Online";
    return fetchResult.status >= 200 && fetchResult.satus < 300;
    //http status code between 200 and 300
    // check to see intenet connetcion is active
  } catch (error) {
    console.log(error); //change status and image source in catch block
    statusDisplay.textContent = "Internet Connection Offline";
    image.src = "./images/offline.png";
    bgColour.classList.remove("online");
  }
}

//MONITOR THE CONNECTION IN REALTIME

setInterval(async () => {
  // async function inside set interval
  const result = await connectionStatus();
  if (result) {
    statusDisplay.textContent = "Your internet connection is still functioning";

    setColour();
  }
}, 5000);

//CHECK CONNECTION ON LOAD PAGE
window.addEventListener("load", async (event) => {
  if (connectionStatus()) {
    console.log(event);
    statusDisplay.textContent = "Your internet connection is functioning";
  } else {
    statusDisplay.textContent = "Your internet connection is broken";
  }
});
