// select the container element in the page
let container = document.querySelector("#container");

// Create a new dic element
// const newDiv = document.createElement("div");

// add a class to the div
// newDiv.classList.add("divGrid");

// Append the new div to the container
// container.appendChild(newDiv);

// create 10 divs inside the container
for (let i = 1; i <= 16*16; i++) {
    const newDiv = document.createElement("div");
    // newDiv.textContent = "div";
    newDiv.classList.add("divGrid");
    container.appendChild(newDiv);
}


// select the element on the page
let divArray = document.querySelectorAll("#container > div");

// listen for a new event when mouse is entering the area of the div
divArray.forEach(div => {
    div.addEventListener("mouseenter", () => {
        // change the color of the background of the div
        // div.classList.add("newBackGroundColor");
        div.style.backgroundColor = "black";
    });
});




