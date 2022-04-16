<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css">

        <title>PHP Test</title>
    </head>

    <body>
    <div><a href="../index.html">Back to examples</a></div>


        <h1>PHP Test</h1>

<?php
echo $_GET['loggedIn'];
$isLoggedIn = 0;
if (array_key_exists('loggedIn', $_GET)) {
    $isLoggedIn = $_GET['loggedIn'];
}

if ($isLoggedIn != 0) {
    echo "Logged in!";
} else {
    echo "Logged out!";
}

//echo "<p>This came from PHP.</p>"
?>

<h2>SQLite3 Info</h2>
<?php
$ver = SQLite3::version();

echo $ver['versionString'] . "\n";
echo $ver['versionNumber'] . "\n";

var_dump($ver);
?>

    <h2>Php Info</h2>

<?php
phpinfo()
?>

</body>
</html>
