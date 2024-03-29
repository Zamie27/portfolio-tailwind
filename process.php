<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "zamie693@gmail.com"; // Ganti dengan alamat email Anda

    $subject = "New Contact Form Submission";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    // Konfigurasi SMTP
    ini_set("SMTP", "smtp.hostinger.com"); // Ganti dengan alamat server SMTP Anda
    ini_set("smtp_port", "465"); // Ganti dengan port SMTP yang sesuai
    ini_set("sendmail_from", "zamie693@gmail.com"); // Ganti dengan alamat email yang sesuai

    // Attempt to send email using SMTP
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully. Thank you!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
