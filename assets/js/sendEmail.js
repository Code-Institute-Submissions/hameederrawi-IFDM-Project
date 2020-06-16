function sendMail(contactForm) {
    emailjs.send("gmail", "realitycontact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "company_name": contactForm.cname.value,
        "tel_number": contactForm.tel.value,
        "info_request": contactForm.inforequest.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return alert("Message sent, Thank you");
}