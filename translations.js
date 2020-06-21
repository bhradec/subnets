const ENGLISH = {
    "mainH1" : "VLSM subnet calculator",
    "networkAddressLabel": "Network address",
    "numOfSubnetsLabel" : "Number of subnets",
    "subnetNameTh" : "Subnet name",
    "numberOfHostsTh" : "Number of hosts",
    "calculate" : "Calculate",
    "changeTheme" : "Change theme",
    "reqDesc" : "Required number of hosts",
    "maxDesc" : "Maximum available number of hosts",
    "firstDesc" : "First available host address",
    "lastDesc" : "Last available host address"
}

const RUSSIAN = {
    "mainH1" : "ВЛСМ калькулятор подсети",
    "networkAddressLabel": "Сетевой адрес",
    "numOfSubnetsLabel" : "Количество подсетей",
    "subnetNameTh" : "Имя подсети",
    "numberOfHostsTh" : "Количество хостов",
    "calculate" : "Рассчитать",
    "changeTheme" : "Поменять тему",
    "reqDesc" : "Требуемое количество хостов",
    "maxDesc" : "Максимально доступное количество хостов",
    "firstDesc" : "Первый доступный адрес хоста",
    "lastDesc" : "Последний доступный адрес хоста"
}

function changeLanguage(language) {
    for (key in language) {
        document.getElementById(key).innerHTML = language[key];
    }
}