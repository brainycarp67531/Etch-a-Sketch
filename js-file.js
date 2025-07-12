// select the container element in the page
let container = document.getElementById("container");

let defaultSize = 16;


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
    // prompt user for size
    let input = prompt("Number of squares per side (1-100)?");
    // Store the number in a variable
    let numberOfSquares = parseInt(input);
    
    if (isNaN(numberOfSquares) || numberOfSquares < 1 || numberOfSquares > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
   
    // update the number of divs, the number represents one side
    createDivs(numberOfSquares);
});


// get the reset button element from the page
let resetButton = document.getElementById("clear");

// event lister for the reset function
resetButton.addEventListener('click', () => {
    createDivs(defaultSize);
});


window.onload = () => {
    createDivs(defaultSize);
};