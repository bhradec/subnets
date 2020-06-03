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