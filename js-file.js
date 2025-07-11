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