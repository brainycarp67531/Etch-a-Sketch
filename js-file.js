// select the container element in the page
let container = document.getElementById("container");


// select the element on the page
let divArray = document.querySelectorAll(".divGrid");

// listen for a new event when mouse is entering the area of the div
divArray.forEach(div => {
    div.addEventListener("mouseenter", () => {
        // change the color of the background of the div
        // div.classList.add("newBackGroundColor");
        div.style.backgroundColor = "black";
    });
});


// function that creates divs inside the container
function createDivs(count) {
    // clear the container of divs
    container.innerHTML = "";

    // generate new divs
    for (let i = 1; i <= count*count; i++) {
        const newDiv = document.createElement("div");
        // newDiv.textContent = "div";
        newDiv.classList.add("divGrid");
        container.appendChild(newDiv);
    }
};

function clearGrid() {
    container.innerHTML = "";
};


// get the button element from the page
let numberButton = document.querySelector("#numberOfSquares");

// get the input from the button
// open a input field for when clicking on the button
numberButton.addEventListener('click', () => {
    // Store the number in a variable
    let numberOfSquares = prompt("Number of squares?");

    // update the number of divs, the number represents one side
    createDivs(numberOfSquares);

});


// get the reset button element from the page
let resetButton = document.getElementById("clear");

// event lister for the reset function
resetButton.addEventListener('click', () => {
    clearGrid();
});


window.onload = () => {
    createDivs(16);
};