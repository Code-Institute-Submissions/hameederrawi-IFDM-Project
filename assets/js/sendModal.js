function sendMail(contactForm) {
    emailjs.send("gmail", "realitycontact_clone", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,        
        "tel_number": contactForm.tel.value,
        "cat_num": contactForm.catnum.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return alert("Quote request sent, Thank you");
}
