var networkAddressInput = document.getElementById("networkAddress");
var subnetInputTable = document.getElementById("subnetInputTable");
var numOfSubnetsInput = document.getElementById("numOfSubnets");
var calculateButton = document.getElementById("calculate");
var changeDayNightColorButton = document.getElementById("changeDayNightColor");
var currentRow = 0;

/**
 * Adds a row to the subnet input table.
 * A row contains subnet name cell and a host number cell.
 */
function addInputTableRow() {
    let tableRow = subnetInputTable.insertRow();
    let tableDataName = tableRow.insertCell();
    let tableDataNumOfHosts = tableRow.insertCell();

    // first cell - subnet name input
    let subnetNameInput = document.createElement("input");
    subnetNameInput.type = "text";
    subnetNameInput.className = "subnetNameInput";

    subnetNameInput.value = "Subnet " + (currentRow + 1).toString();
    currentRow++;

    // second cell - number of hosts input
    let numOfHostsInput = document.createElement("input");
    numOfHostsInput.type = "number";
    numOfHostsInput.className = "numOfHostsInput";

    tableDataName.appendChild(subnetNameInput);
    tableDataNumOfHosts.appendChild(numOfHostsInput);
}

/**
 * Removes a row from the subnet input table
 */
function removeInputTableRow() {
    subnetInputTable.deleteRow(currentRow);
    currentRow--;
}

/**
 * Generates subnet input table with the given number of rows.
 * @param {number} numOfSubnets Number od rows in the subnet input table.
 */
function generateSubnetInputTable(numOfSubnets) {
    for (i = 0; i < numOfSubnets; i++) {
        addInputTableRow();        
    }
}

/* Adds or removes a table row on subnet number change */
numOfSubnetsInput.onchange = () => {
    let numOfSubnets = numOfSubnetsInput.value;
    let errorSpan = document.getElementById("numOfSubnetsError");
    rowsBeforeChange = currentRow;

    if (numOfSubnets <= 0) {
        document.getElementById("numOfSubnets").value = 0;
        errorSpan.innerHTML = "Invalid number of subnets";
    } else {
        errorSpan.innerHTML = "";
        if (numOfSubnets < currentRow) {
            for (i = 0; i < rowsBeforeChange - numOfSubnets; i++) {
                removeInputTableRow();        
            }
        } else if (numOfSubnets > currentRow) {
            for (i = 0; i < numOfSubnets - rowsBeforeChange; i++) {
                addInputTableRow();        
            }

            /* Sets the colors of the new rows,
               the function is located in changeDayNightColor.js */
            setColor();
        }
    }
}

calculateButton.onclick = () => {
    let networkAddress = networkAddressInput.value;

    if(validateIpAddressCIDR(networkAddress) == false) {
        let errorSpan = document.getElementById("networkAddressError");
        errorSpan.innerHTML = "Invalid IPv4 address";
    }

    let subnetNameInputs = document.getElementsByClassName("subnetNameInput");
    let numOfHostsInputs = document.getElementsByClassName("numOfHostsInput")

    let subnetInputData = [];

    /* key - subnet name, value - number of hosts*/
    for (i = 0; i < subnetNameInputs.length; i++) {
        subnetInputData.push({
            subnetName: subnetNameInputs[i].value, 
            numOfHosts: Number(numOfHostsInputs[i].value)
        });
    }

    calculateSubnets(networkAddress, subnetInputData);
}

changeDayNightColorButton.onclick = function(event) {
    changeColor();
}

// Color scheme changes acording to system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    changeColor();
});

/* Generates input table for the default number of subnets */
generateSubnetInputTable(numOfSubnetsInput.value);

document.getElementById("englishButton").onclick = () => {
    changeLanguage(ENGLISH);
};

document.getElementById("russianButton").onclick = () => {
    changeLanguage(RUSSIAN);
};

document.getElementById("chineseButton").onclick = () => {
    changeLanguage(CHINESE);
};

