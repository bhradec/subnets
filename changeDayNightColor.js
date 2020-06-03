var changeDayNightColorButton = document.getElementById("changeDayNightColor");
currentColorMode = 0;

function changeColor() {
    if (currentColorMode == 0) currentColorMode = 1;
    else if (currentColorMode == 1) currentColorMode = 0;

    setColor();
}

function setColor() {
    if (currentColorMode == 0) {
        document.body.style.backgroundColor = "white";

        var h1 = document.querySelectorAll("h1");
        h1[0].style.color = "black";

        var label = document.querySelectorAll("label");
        for(i = 0; i < label.length; i++){
            label[i].style.color = "black";
        }

        var input = document.querySelectorAll("input");
        for(i = 0; i < input.length; i++){
            input[i].style.color = "black";
            input[i].style.backgroundColor = "white";
        }
        
        var table = document.querySelectorAll("table");
        for(i = 0; i < table.length; i++){
            table[i].style.color = "black";
        }

        var td = document.querySelectorAll("td");
        for(i = 0; i < td.length; i++){
            td[i].style.borderColor = "black";
        }

        var button = document.querySelectorAll("button");
        for(i = 0; i < button.length; i++){
            button[i].style.color = "buttontext";
            button[i].style.backgroundColor = "buttonface";
        }
    } else if (currentColorMode == 1) {
        document.body.style.backgroundColor = "black";

        var h1 = document.querySelectorAll("h1");
        h1[0].style.color = "white";

        var label = document.querySelectorAll("label");
        for(i = 0; i < label.length; i++){
            label[i].style.color = "white";
        }

        var input = document.querySelectorAll("input");
        for(i = 0; i < input.length; i++){
            input[i].style.color = "white";
            input[i].style.backgroundColor = "black";
        }
        
        var table = document.querySelectorAll("table");
        for(i = 0; i < table.length; i++){
            table[i].style.color = "white";
        }

        var td = document.querySelectorAll("td");
        for(i = 0; i < td.length; i++){
            td[i].style.borderColor = "white";
        }

        var button = document.querySelectorAll("button");
        for(i = 0; i < button.length; i++){
            button[i].style.color = "white";
            button[i].style.backgroundColor = "black";
        }
    }
}

changeDayNightColorButton.onclick = function(event) {
    changeColor();
}