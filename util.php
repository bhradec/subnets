<?php 

    function generateHeader() {
        echo '<header>';
        echo '<nav>';
        echo '<a href="index.php"><h1>Subnetting.me</h1></a>';
        echo '<ul>';
        echo '<li><a href="index.php">VLSM</a></li>';
        echo '<li><a href="ipv4.php">IPv4</a></li>';
        echo '<li><a href="ipv6.php">IPv6</a></li>';
        echo '<li><a href="about.php">About</a></li>';
        echo '<li>';
        echo '<button onclick="changeTheme()">';
        echo '<i class="far fa-lightbulb"></i>';
        echo '</button>';
        echo '</li>';
        echo '</ul>';
        echo '</nav>';
        echo '</header>';
    }

?>