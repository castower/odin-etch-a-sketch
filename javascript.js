// File for Javascript interactivity
// May 26, 2024

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = "16 x 16"; // Display the default slider value
default_val = parseInt(slider.value);
console.log(default_val);

const game = document.querySelector(".game-container");

// Color pallette: https://coolors.co/palette/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0
colors = ["rebeccapurple", "#f72585", "#b5179e", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", 
           "#3f37c9", "#4361ee", "#4895ef", "#4cc9f0"]

function backgroundColorChange (event) {
    gridBlock = event.target.id;
    console.log(gridBlock);
    color_select = Math.floor(Math.random() * (colors.length - 0) + 1);
    console.log(color_select);
    color = colors[color_select];
    console.log(color);
    document.getElementById(`${gridBlock}`).style.backgroundColor = color;
    console.log("this works");
}

function backgroundColorChangeBack(event) {
    gridBlock = event.target.id;
    console.log(gridBlock);
    document.getElementById(`${gridBlock}`).style.backgroundColor = "#F2C1D1";
    console.log("this works too");
}

function add_grid(grid_num) {
    grid_num_end = grid_num + 1;
    for (c = 1; c < grid_num_end; c ++){
        var divRow = document.createElement("div");
        divRow.classList.add("flex-wide");
        for (r = 1; r < grid_num_end; r++) {
            var divCreate = document.createElement("div");
            divCreate.classList.add("game-block");
            divCreate.id = `gridR${r}C${c}`;
            divCreate.innerText = ".";
            divCreate.style.color = "transparent";
            //divCreate.innerText = `R${r}C${c}`;
            divRow.appendChild(divCreate);
        }
        game.appendChild(divRow);
    }
    // Add listeners to blocks to apply color changes
    document.querySelectorAll('.game-block')
    .forEach(gameblock => gameblock.addEventListener('mouseover', backgroundColorChange));

    document.querySelectorAll('.game-block')
    .forEach(gameblock => gameblock.addEventListener('click', backgroundColorChangeBack));
}

add_grid(default_val);

function grid_reset() {
    window.location.reload();
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    squares = parseInt(this.value);
    console.log(squares);
    output.innerHTML = `${squares} x ${squares}`;
    blocks = document.querySelectorAll('.game-block');
    blocks.forEach(e => e.remove());
    rows = document.querySelectorAll('.flex-wide');
    rows.forEach(e => e.remove());
    add_grid(squares);
}

// Clear drawing and start over
document.querySelectorAll('.clear-button')
    .forEach(clear => clear.addEventListener('click', grid_reset));


/*
<div class="one"></div>
<div class="two"></div>
<div class="three"></div>
*/