// select the container element in the page
let container = document.getElementById("container");


// function that creates divs inside the container
function createDivs(count) {
    // clear the container of divs
    container.innerHTML = "";

    // generate new divs
    for (let i = 1; i <= count*count; i++) {
        const newDiv = document.createElement("div");
     
        // newDiv.textContent = "div";
        newDiv.classList.add("divGrid");
     
        //calculate the width of the div and update the width of the div
        let divWidth = 800 / count;
        newDiv.style.width = divWidth + "px";
        newDiv.style.height = divWidth + "px";
     
        // add hover event listener
        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.background = "black";
        })
        
        // add the new div to the container
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