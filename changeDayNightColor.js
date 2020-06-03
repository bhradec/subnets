const LIGHT_MODE = 1;
const DARK_MODE = 0;

const DARK_BACKGROUND = "#0f111a";
const DARK_INPUT = "#1a1c25";
const DARK_BORDER = "#8e70bd";
const DARK_FOREGROUND = "#ffffff"
const DARK_ACCENT_1 = "#8bb265"
const DARK_ACCENT_2 = "#528bc8"

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
        // reset colors to default css values
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
        document.body.style.backgroundColor = DARK_BACKGROUND;
        
        for (h1 of h1s) h1.style.color = DARK_FOREGROUND;
        for(label of labels) label.style.color = DARK_FOREGROUND;

        for(input of inputs){
            input.style.color = DARK_FOREGROUND;
            input.style.backgroundColor = DARK_INPUT;
            input.style.borderColor = DARK_BORDER;
        }
        
        for(table of tables) table.style.color = DARK_FOREGROUND;
        for(td of tds) td.style.borderColor = DARK_BORDER;

        for(button of buttons){
            button.style.color = DARK_FOREGROUND;
            button.style.backgroundColor = DARK_INPUT;
            button.style.borderColor = DARK_BORDER;
        }
    }
}
