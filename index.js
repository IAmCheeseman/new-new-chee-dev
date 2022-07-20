let downButton = document.getElementById("down-button");
let contentStart = document.getElementById("main-content-start");

downButton.onclick = () => {
    contentStart.scrollIntoView();
}