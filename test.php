<?php
    session_start();
    include 'dbh.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
    <div id="item_record">
        <?php
            echo '{"message":[{"id":"1","name":"meat","catagory_num":"1"},{"id":"2","name":"vegetable","catagory_num":"2"},{"id":"3","name":"wine","catagory_num":"4"},{"id":"4","name":"rice","catagory_num":"8"},{"id":"5","name":"sea food","catagory_num":"16"}]}';
        ?>
    </div>

</body>
</html>