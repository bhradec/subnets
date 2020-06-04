const ENGLISH = {
    "networkAddressLabel": "Network address",
    "numOfSubnetsLabel" : "Number of subnets",
    "subnetNameTh" : "Subnet name",
    "numberOfHostsTh" : "Number of hosts",
    "calculate" : "Calculate",
    "changeTheme" : "Change theme"
}

const RUSSIAN = {
    "networkAddressLabel": "Сетевой адрес",
    "numOfSubnetsLabel" : "Количество подсетей",
    "subnetNameTh" : "Имя подсети",
    "numberOfHostsTh" : "Количество хостов",
    "calculate" : "Рассчитать",
    "changeTheme" : "Поменять тему"
}

const CHINESE = {
    "networkAddressLabel": "网络地址",
    "numOfSubnetsLabel" : "子网数",
    "subnetNameTh" : "子网名称",
    "numberOfHostsTh" : "主机数",
    "calculate" : "计算",
    "changeTheme" : "改变主题"
}


function changeLanguage(language) {
    for (key in language) {
        document.getElementById(key).innerHTML = language[key];
    }
}