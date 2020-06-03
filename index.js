var networkAddressInput = document.getElementById("networkAddress");
var subnetInputTable = document.getElementById("subnetInputTable");
var numOfSubnetsInput = document.getElementById("numOfSubnets");
var calculateButton = document.getElementById("calculate");
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

/**
 * Validates an ipv4 address.
 * @param {string} ipAddress  Ipv4 address to validate.
 * @return {boolean} Returns true if ipv4 address is valid, false if not.
 */
function validateIpAddress(ipAddress) {
    let ipRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
    
    if (ipRegex.test(ipAddress)) return true  
    else return false;
}

/**
 * Validates an ipv4 address with the network mask suffix.
 * @param {string} ipAddresCIDR Ipv4 address with the network suffix (ex: 192.168.1.1/24)
 * @return {boolean} Returns true if ipv4 address and suffix are valid, false if not. 
 */
function validateIpAddressCIDR(ipAddresCIDR) {
    let ipAddress = ipAddresCIDR.split("/")[0];
    let suffix = Number(ipAddresCIDR.split("/")[1]);

    console.log("IPADDR: " + ipAddress);
    console.log("SUFF: " + suffix);

    if (validateIpAddress(ipAddress) == false) {
        return false;
    }

    if (suffix < 0 || suffix > 32) {
        return false;
    }

    return true;
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

    /* sort subnetInputData by number of hosts descending */
    subnetInputData.sort((a, b) => {
        if (a.numOfHosts > b.numOfHosts) return -1;
        else return 1;
    })

    // caluculateSubnets(subnetInputData, networkAddress);
}

/* Generates input table for the default number of subnets */
generateSubnetInputTable(numOfSubnetsInput.value);