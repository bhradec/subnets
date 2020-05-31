var subnetInputTable = document.getElementById("subnetInputTable");
var numOfSubnetsInput = document.getElementById("numOfSubnets");
var calculateButton = document.getElementById("calculate");
var currentRow = 0;

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

function removeInputTableRow() {
    subnetInputTable.deleteRow(currentRow);
    currentRow--;
}

function generateSubnetInputTable(numOfSubnets) {
    for (i = 0; i < numOfSubnets; i++) {
        addInputTableRow();        
    }
}

/* Generates input table for the default number of subnets */
generateSubnetInputTable(numOfSubnetsInput.value);

/* Adds or removes a table row on subnet number change */
numOfSubnetsInput.onchange = () => {
    let numOfSubnets = numOfSubnetsInput.value;
    
    if (numOfSubnets < currentRow) {
        removeInputTableRow();
    } else if (numOfSubnets > currentRow) {
        addInputTableRow();
    }
}

calculateButton.onclick = () => {
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

    /* sort subnetInputData by number of hosts descending */
    subnetInputData.sort((a, b) => {
        if (a.numOfHosts > b.numOfHosts) {
            return -1;
        } else {
            return 1;
        }
    })

    for (const dataobject of subnetInputData) {
        console.log(dataobject.numOfHosts);
    }    
}