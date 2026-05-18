<html>
    <head>
        <title>blinking bulb</title>
    </head>
    <body>
        <img src="c:/Users/Student/Downloads/offbulb.jpg" height=180px; alt="" id="bulb">
    </body>
    <script>
        var a = document.getElementById("bulb");
        a.addEventListener("mouseover",()=>{
            a.src= "c:/Users/Student/Downloads/onbulb.png";
        });
        a.addEventListener("mouseout",()=>{
            a.src= "c:/Users/Student/Downloads/offbulb.jpg";
        });
    </script>
