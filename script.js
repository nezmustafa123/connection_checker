// variables

const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
  bgColor.classList.add("online");
}
//fetch something external from server

async function connectionStatus() {
  try {
    const fetchResult = await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Wikipedia-logo-transparent.png?time=" +
        new Date().getTime()
    );
    image.src = "./images/online.png";
    setColor();
    return fetchResult.status >= 200 && fetchResult.satus < 300;
    //http status code between 200 and 300
    // check to see intenet connetcion is active
  } catch (error) {
    console.log(error);
  }
}
