<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function foo (p1)
{
if (typeof(p1) == "number"){
document.write(p1+"<br>");
return 0;
}
else{
if (typeof(p1) == "string"){
    document.write(p1+"<br>");
return "zero"; }
}
}
foo(1);
foo("abc");
foo();
    </script>
</body>
</html>
