<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="referrer" content="origin-when-cross-origin">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>App</title>
        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="57x57" href="assets/img/fav/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="assets/img/fav/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="assets/img/fav/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/img/fav/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/img/fav/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="assets/img/fav/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="assets/img/fav/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="assets/img/fav/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/img/fav/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="assets/img/fav/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/img/fav/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="assets/img/fav/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/img/fav/favicon-16x16.png">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="assets/img/fav/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        <link rel="manifest" href="./manifest.json">
        <link rel="preload" as="style" href="assets/css/top.css">
        <link rel="stylesheet" href="assets/css/top.css">
        
        <link rel="stylesheet" href="assets/css/libs.css.php">
        <link rel="stylesheet" href="assets/css/app.css">
        <link rel="stylesheet" href="assets/css/bottom.css">
    </head>
    <body class="shift-element">

        <?php require("templates/header.php"); ?>

        <main>
            <?php require("templates/".$_GET["p"].".php"); ?>
        </main>

        <?php require("templates/footer.php"); ?>

        <!-- JS -->
        <!-- <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> -->
        <script defer src="assets/js/libs.js.php"></script>
        <!-- <script defer src="assets/js/utils/functions.js"></script>
        <script defer src="assets/js/main.js"></script> -->
        <script defer src="assets/js/utils/functions-core.js"></script>
        <script defer src="assets/js/main-core.js"></script>
    </body>
</html>

<!--  <link rel="stylesheet" href="assets/css/app.css" media="none" onload="if(media!='all')media='all'">-->
<!--  <noscript><link rel="stylesheet" href="assets/css/app.css"></noscript>-->