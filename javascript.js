// File for Javascript interactivity
// May 26, 2024

const game = document.querySelector(".game-container");

function add_grid() {
    for (c = 1; c < 17; c ++){
        var divRow = document.createElement("div");
        divRow.classList.add("flex-wide");
        for (r = 1; r < 17; r++) {
            var divCreate = document.createElement("div");
            divCreate.classList.add(`grid${r}`);
            divCreate.classList.add(`game-block`);
            divCreate.innerText = `R${r}C${c}`;
            divCreate.style.border = "ridge";
            divCreate.style.borderColor = "gray";
            divRow.appendChild(divCreate);
        }
        game.appendChild(divRow);
    }
}

add_grid()
/*
<div class="one"></div>
<div class="two"></div>
<div class="three"></div>
*/