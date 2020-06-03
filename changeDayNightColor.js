const LIGHT_MODE = 1;
const DARK_MODE = 0;

var currentColorMode = LIGHT_MODE;

function changeColor() {
    if (currentColorMode == LIGHT_MODE) currentColorMode = DARK_MODE;
    else if (currentColorMode == DARK_MODE) currentColorMode = LIGHT_MODE;

    setColor();
}

function setColor() {
    var h1s = document.querySelectorAll("h1");
    var labels = document.querySelectorAll("label");
    var inputs = document.querySelectorAll("input");
    var tables = document.querySelectorAll("table");
    var tds = document.querySelectorAll("td");
    var buttons = document.querySelectorAll("button");

    if (currentColorMode == LIGHT_MODE) {
        document.body.style.backgroundColor = "";
        
        for (h1 of h1s) h1.style.color = "";
        for(label of labels) label.style.color = "";

        for(input of inputs){
            input.style.color = "";
            input.style.backgroundColor = "";
            input.style.borderColor = "";
        }
        
        for(table of tables) table.style.color = "";
        for(td of tds) td.style.borderColor = "";

        for(button of buttons){
            button.style.color = "";
            button.style.backgroundColor = "";
            button.style.borderColor = "";
        }
    } else if (currentColorMode == DARK_MODE) {
        document.body.style.backgroundColor = "black";
        
        for (h1 of h1s) h1.style.color = "white";
        for(label of labels) label.style.color = "white";

        for(input of inputs){
            input.style.color = "white";
            input.style.backgroundColor = "black";
            input.style.borderColor = "white";
        }
        
        for(table of tables) table.style.color = "white";
        for(td of tds) td.style.borderColor = "white";

        for(button of buttons){
            button.style.color = "white";
            button.style.backgroundColor = "black";
            button.style.borderColor = "white";
        }
    }
}
