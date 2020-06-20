function ValidateEmail(emailaddress)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailaddress.value.match(mailformat))
    {
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    emailaddress.focus();
    return false;
    }
    }

function ValidateFname()
    { 
    var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters))
    {
    return true;
    }
    else
    {
    alert('Please input alphabet characters only in the First Name Field');
    return false;
    }
    }

var Abuse = function ()
        {
            var com = document.getElementById('inforequest');
            var filterWords = ["bad1", "bad2", "bad3"];
            // "i" is to ignore case and "g" for global
            var rgx = new RegExp("("+filterWords.join("|")+")", "gi");
            com.value = com.value.replace(rgx, "****");

            // 'return true;' when you will be sure that all your bad words are caught to continue to the next function otherwise a return false will stop the next step.
            return true;
        }

function ValidateLname()
    { 
    var letters = /^[A-Za-z]+$/;
    if(lname.value.match(letters))
    {    
    return true;
    }
    else
    {
    alert('Please input alphabet characters only in the Last Name Field');
    return false;
    }
    }

// If the length of the element's string is 0 then display helper message 
function ValidateMessage() 
   {
     if (inforequest.value.length <= 15)
      { 
         alert("Message field is too short!");  	
         return false; 
      }  	
      return true; 
    } 

function sendMail(contactForm) {
    emailjs.send("gmail", "realitycontact", {
        "from_fname": contactForm.fname.value,
        "from_lname": contactForm.lname.value,
        "company_name": contactForm.cname.value,
        "from_email": contactForm.emailaddress.value,            
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
    
    alert("Message sent, Thank you");
    return false;
    
}

