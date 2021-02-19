<?php

$request_uri = explode('?', $_SERVER['REQUEST_URI'])[0];
$path = explode('/', $request_uri);
$path[0] = "practices";
$targetPractice = $path[0] . "/" . $path[1];

require_once $targetPractice . "/" . "render.php";
array_shift($path);
array_shift($path);

[
    'filePath' => $filePath,
    'args' => $args
] = render($path);

$pug = new Pug([
    // here you can set options
]);

$pug->displayFile($targetPractice . '/' . $filePath, $args);
