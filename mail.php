
<?php
$sendgrid_env='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';
$email = trim($_POST["email"]);
$myfile = fopen("./template/email.html", "r") or die("Unable to open file!");
$template=(string) fread($myfile,filesize("./template/email.html"));
echo file_get_contents("./template/email.html");
fclose($myfile);
//require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
 require("sendgrid-php/sendgrid-php.php");
// If not using Composer, uncomment the above line and
// download sendgrid-php.zip from the latest release here,
// replacing <PATH TO> with the path to the sendgrid-php.php file,
// which is included in the download:
// https://github.com/sendgrid/sendgrid-php/releases
$emails= (string) $email;
$email = new \SendGrid\Mail\Mail(); 
$email->setFrom("saurabh.katkar103@gmail.com", "Example User");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo($emails, "Example User");
$email->addContent(
    "text/html", $template
);
$sendgrid = new \SendGrid($sendgrid_env);
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}