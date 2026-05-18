<!DOCTYPE html>
<html>
<head>
    <title>Validation</title>
</head>
<body>
    
    <input type="text" id="myText" placeholder="Enter email">
    <button onclick="checkMail()">Validate</button>

    <script>
        function checkMail() {
            var a = document.getElementById("myText").value;
            var regex = /^[\w\.\-]+@[a-zA-Z\d\.\-]+\.[a-zA-Z]{2,}$/;
            
            if(regex.test(a)) {
                alert("Valid");
            } else {
                alert("Invalid");
            }
            document.write("I think you had get your answer!");
        }
    </script>
</body>
</html>
