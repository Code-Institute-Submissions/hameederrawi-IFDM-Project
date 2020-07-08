function ValidateEmail(emailaddress)
    {
// I used inspiration for all form validation codes in this page from w3schools which pointed me in the direction I needed for my code.

// The email will be validated using the pattern below, if do not match an alert message will display
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailaddress.value.match(mailformat))
    {
    return true;
    }
    else
    {
//Alert message will display on error
    alert("You have entered an invalid email address!");
    emailaddress.focus();
    document.getElementById("emailaddress").this.val("");
    return false;
    }
    }

function ValidateFname()
    {
// The First Name will be validated using the pattern below, if do not match an alert message will display 
    var letters = /^[A-Za-z]+$/;
    if(fname.value.match(letters))
    {
    return true;
    }
    else
    {
//Alert message will display on error
    alert('Please input alphabet characters only in the First Name Field');
    fname.focus();
    return false;
    }
    }

var Abuse = function ()
        {
// getElementById is used in this filter, input the id of the field you want to validate - code from https://stackoverflow.com with some adjustments by me.
            var com = document.getElementById('inforequest');
            var filterWords = ["bad1", "bad2", "bad3"];
            // "i" is to ignore case and "g" for global
            var rgx = new RegExp("("+filterWords.join("|")+")", "gi");
            com.value = com.value.replace(rgx, "****");

// 'return true' when you will be sure that all your bad words are caught to continue to the next function otherwise a return false will stop the next step.
            return true;
        }

function ValidateLname()
    {
// The Last Name will be validated using the pattern below, if do not match an alert message will display 
    var letters = /^[A-Za-z]+$/;
    if(lname.value.match(letters))
    {    
    return true;
    }
    else
    {
//Alert message will display on error
    alert('Please input alphabet characters only in the Last Name Field');
    lname.focus();
    return false;
    }
    }

// If the length of the element's string is = or < 15 then display alert message 
function ValidateMessage() 
   {
     if (inforequest.value.length <= 15)
      { 
//Alert message will display on error
         alert("Message field is too short!");  	
         return false; 
      }  	
      return true; 
    } 

function sendMail(contactForm) {
// Note- when connecting to the email service (emailJS in this case) pass 2 arguments the 1st is the service used
// the second is the email tempalte name created at emailJS as learned from CodeInstitute course
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
    
// After form submission, the h2 contents will be replaced with thank you message using fname and lname of sender
//and the form will be replaced with the website owner signature 
    
    var realityM = ("Thank you " + fname.value + " " + lname.value + " Your message is sent");
    document.getElementById("thankYouMessage").innerHTML = realityM; 
    var reality = "The Reality Decor Team";
    document.getElementById("formC").setAttribute('align', 'center');
    document.getElementById("formC").innerHTML = reality;
    
// Adding google Map as learned from CodeInstitute course     
    var map =new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: {
                        lat: 31.974204,
                        lng: 35.865809
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
                	
                {lat: 31.9746628704, lng: 35.8416080475}, 
                {lat: 31.9656628704, lng: 35.8916080475},  
                                
            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length],
//added a label to the marker
                    label: "Reality Decor",

                });
            });

            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

       
            }


