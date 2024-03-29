<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Name = $_POST["name"];
    $Email = $_POST["email"];
    $Pesan = $_POST["message"];

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
        echo "Pesan telah dikirim. Terima kasih dan tunggu balasannya:)";
    } else {
        echo "Oops! Sepertinya ada yang salah dari form yang anda isi tersebut";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
