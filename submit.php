<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject = $_POST["subject"];
    
    $to = "thuanphongpham@gmail.com"; 
    
    
    $headers = "Header: $name sends a message from website. Their email is: $email.";
    
    mail($to, $subject, $message, $headers);
    
    // Redirect the user to a "Thank You" page.
    header("Location: thank-you.html");
}

