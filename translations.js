const ENGLISH = {
    "mainH1" : "VLSM subnet calculator",
    "networkAddressLabel": "Network address",
    "numOfSubnetsLabel" : "Number of subnets",
    "subnetNameTh" : "Subnet name",
    "numberOfHostsTh" : "Number of hosts",
    "calculate" : "Calculate",
    "changeTheme" : "Change theme"
}

const RUSSIAN = {
    "mainH1" : "ВЛСМ калькулятор подсети",
    "networkAddressLabel": "Сетевой адрес",
    "numOfSubnetsLabel" : "Количество подсетей",
    "subnetNameTh" : "Имя подсети",
    "numberOfHostsTh" : "Количество хостов",
    "calculate" : "Рассчитать",
    "changeTheme" : "Поменять тему"
}

function changeLanguage(language) {
    for (key in language) {
        document.getElementById(key).innerHTML = language[key];
    }
}