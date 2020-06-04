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

/**
 * Gets the ip part of the network address with the suffix
 * @param {string} ipAddresCIDR Ipv4 address with the network suffix (ex: 192.168.1.1/24) 
 * @return {Array<number>} Array of 4 ip octets
 */
function getIpOctets(ipAddresCIDR) {
    let ip = ipAddresCIDR.split("/")[0];
    let stringOctets = ip.split(".");
    let numericOctets = [];

    for (stringOctet of stringOctets) {
        numericOctets.push(Number(stringOctet));
    }

    return numericOctets;
}

/**
 * Gets the ip 
 * @param {string} ipAddresCIDR Ipv4 address with the network suffix (ex: 192.168.1.1/24) 
 * @return {number} Subnet mask suffix
 */
function getSuffix(ipAddresCIDR) {
    return Number(ipAddresCIDR.split("/")[1]);
}

/**
 * Calculates ip addresses of subnets for given subnet data
 * @param {string} ipAddresCIDR Ipv4 address with the network suffix (ex: 192.168.1.1/24)
 * @param {Object[]} subnetData List of key value subnet data
 * @param {string} subnetData[].subnetName Key - name of the subnet
 * @param {number} subnetData[].numOfHosts Value - number of hosts for the subnet
 */
function calculateSubnets(ipAddresCIDR, subnetData) {
    
    // sort subnetInputData by number of hosts descending */
    subnetData.sort((a, b) => {
        if (a.numOfHosts > b.numOfHosts) return -1;
        else return 1;
    })

    octets = getIpOctets(ipAddresCIDR);
    suffix = getSuffix(ipAddresCIDR);

    console.log("SUBNET INPUT DATA");
    for (subnet of subnetData) {
        console.log("NAME: " + subnet.subnetName);
        console.log("NUMBER: " + subnet.numOfHosts);
    }

    console.log("OCTETS: " + octets);
    console.log("SUFFIX: " + suffix);
}