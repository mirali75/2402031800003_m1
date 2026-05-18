<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let m1=prompt("enter your 1st subject marks");
        let m2=prompt("enter your 2nd subject marks");
        let m3=prompt("enter your 3rd subject marks");
        let m4=prompt("enter your 4th subject marks");
        let m5=prompt("enter your 5th subject marks");

        let sum=m1+m2+m3+m4+m5;
        let result=(sum/5)*100;

        if(result>=90)
            {
                alert("congrats!  you are pass with A gread");
            }
        else if(result>=80&&result<=90)
            {
                alert("good job! you are pass with B gread!");
            }
        else if(result>=65&&result<=80)
            {
                alert("you are pass with C gread!");
            }
        else if(result>=35&&result<=65)
            {
                alert("work more! you are just pass");
            }
        else{
                 alert("ohh sorry! you are fail");
            }
    </script>
</body>
</html>
