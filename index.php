<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0">
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Demo</title>
    </head>
    <body>
        <link rel="stylesheet" href="assets/css/top.css" />
        <link rel="stylesheet" href="assets/css/libs.css.php" />
        <link rel="stylesheet" href="assets/css/app.css">

        <?php require("templates/header.php"); ?>

        <main>
            <?php require("templates/".$_GET["p"].".php"); ?>
        </main>

        <?php require("templates/footer.php"); ?>

        <link rel="stylesheet" href="assets/css/bottom.css">

        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script defer src="assets/js/libs.js.php"></script>
        <script defer src="assets/js/main.js"></script>
    </body>
</html>

<!--  <link rel="stylesheet" href="assets/css/app.css" media="none" onload="if(media!='all')media='all'">-->
<!--  <noscript><link rel="stylesheet" href="assets/css/app.css"></noscript>-->