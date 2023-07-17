function sendEmail() {
    let email = document.querySelector("#exampleFormControlInput1").value;
    let message = document.getElementById("#exampleFormControlTextarea1").value;

    let templateParams = {
      email: email,
      subject: "I'm interested in you",
      message: message
    };

    emailjs.send('service_aqvhmk9', '<YOUR_TEMPLATE_ID>', templateParams)
      .then(function(response) {
        alert("Email sent successfully!");
        // Reset the form after successful submission
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      }, function(error) {
        alert("An error occurred while sending the email. Please try again later.");
    });

    return false; // Prevent form submission
}