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
 * Finds the next larger power of 2.
 * If 4 is given, returns 8.
 * If 10 is given returns 16.
 * @param {number} x Given number
 * @return {number} Next larger power of 2
 */
function nextPowerOfTwo(x) {
    let currentNumber = 2;
    while (x > currentNumber) {
        currentNumber *= 2;
    }
    return currentNumber;
}

/**
 * Bitwise AND on 2 ip addresses
 * @param {Array<number>} ip1octets Array of octets of 1. ip address (4 numbers)
 * @param {Array<number>} ip2octets Array of octets of 2. ip address(4 numbers)
 * @return {Array<number>} Array of octets (4 numbers) 
 */
function ipAnd(ip1octets, ip2octets) {
    let result = [];
    for (i = 0; i < 4; i++) {
        result.push(ip1octets[i] & ip2octets[i]);
    }
    return result;
}

/**
 * Bitwise OR on 2 ip addresses
 * @param {Array<number>} ip1octets Array of octets of 1. ip address (4 numbers)
 * @param {Array<number>} ip2octets Array of octets of 2. ip address(4 numbers)
 * @return {Array<number>} Array of octets (4 numbers) 
 */
function ipOr(ip1octets, ip2octets) {
    let result = [];
    for (i = 0; i < 4; i++) {
        result.push(ip1octets[i] | ip2octets[i]);
    }
    return result;
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

    console.log(nextPowerOfTwo(6));
    console.log(nextPowerOfTwo(4));

    let exampleOctets = [192, 168, 1, 1];
    let exampleSubnet = [255, 255, 0, 0];

    console.log(ipAnd(exampleOctets, exampleSubnet));
}