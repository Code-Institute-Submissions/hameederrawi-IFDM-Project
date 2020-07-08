// This function is for the modal form submission based on emailJS function learned from CodeInstitute course
function sendMail(modal) {
    emailjs.send("gmail", "realitycontact_clone", {
        "from_name": modal.name.value,
        "from_email": modal.emailaddress.value,        
        "tel_number": modal.tel.value,
        "cat_num": modal.catnum.value
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
