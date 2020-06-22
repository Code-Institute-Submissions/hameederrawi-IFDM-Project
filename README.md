## Project Name

Reality Decor

This project is for a high quality wallpaper and furniture company called THE A.S. CRÉATION GROUP that has many branches and distributors worldwide.

This website is for THE A.S. CRÉATION GROUP Middle-East distributors, to sell the group products online.

The wallpapers are primarily produced in Germany at A.S. Création Tapeten AG on the site in Wiehl-Bomig.

Reality Decor offers its customers a wide range of services: comprehensive departmental planning, shop-fitting, ordering, decoration, individual marketing concepts, sales promotional packages, concepts for point-of-sale (POS), as well as a 24-hour delivery service.

## UX

This website has many products on display that will help the user to select from and request a quote on products they are interested in purchasing.

The website header will appear different from smaller devices to larger devices, on larger devices a logo image will appear,

which will not be visible on smaller devices to give easier user experience in browsing.

The Home page in divided into three sections;

Fisrt section, the header image and links to other pages.

Second section, a Carousel displaying featured products.

Third section, a footer with company details, a download link for product catalogue and social media links.

The user can click on the About Us menu button, the about page will be displayed giving information about the company.

The user can click on the products section to view a page consisting of a table of products,

when the user hover the mouse over a product, the zoom effect will apply to enlarge the image for more detailed view.

Each product will have a title as well as a tooltip title that will appear on mouse hover over products pictures displaying the product catalogue ID.

when the user click on the selected product, a new page will open with the selected product image,

The selected product will have a title of the collection name and the catalogue number and a button labled Get a Quote.

When the Get a Quote button is clicked, the user will be presented by a popup modal (whith the selected product details filled out in the top field and cannot be changed),

The user is required to enter their details; email address (required), first and last name are also required fields the telephone number is an optional field.

The modal has a submit button that will allow submission after validating the required fields.

After submission the form details are transmitted to the website owners for processing, the user will recieve an auto reply email to confirm their request.

when the user clicks on the Contact menu button, the contact us page will be displayed consisting of;

1. A Googles Map zoomed at the world region of the company, with 2 markers which if clicked will display a higher zoom for the locations of the company branches.

2. A contact form which the user can use to contact the company;

when all required fileds are filled, the user can click the submit button to submit the form, when the submit button is clicked;

The form will be validated before submission, if there is any errors, the user will presented with alert message explaining the nature

of the error, when all validation are passed, the form will submit, the form section will be replaced displaying a message 

with the user first and last name, thanking them for their message and the team signature bellow the message.

At this stage the form details are transmitted to the website owners for processing and the user will receive an auto reply email to the email address

they provided in the email address form field.

The website has the following links;

Logo: on click - redirects the user to the home page (only visible on screens larger than 375x812)
Home: on click - redirects the user to the home page.
About Us: on click - redirects the user to the about page for a brief introduction to the business.
Products: on click - redirects the user to the products page.
products modal: popup modal for "get a quote" on selected product.
Contact: on click - redirects the user to the contact page, displaying a form for submission with required and optional fields.
Social: on click - redirects the user to the relevant social network.


Mockups link:

https://github.com/hameederrawi/IFDM-Project/tree/master/assets/mockup

## Features

The project consist of the following features:
Strokeme text effect, adding color effect to the outline of the text in the name.
p::first-letter text effect, changing the first letter color and font type in the name.
A Carousel displaying featured products, with "left-right" controls to change images.
A Hover sweep down change color effect to menu items.
A Hover zoom effect to the products images.
A tooltip title that will appear on mouse hover over products pictures displaying the product catalogue ID.
A Hover sweep down change color effect to the social network and download links.
Social media icons change to respective color upon hover. 
A google map in the contact page set at zoom level 5 which will change to zoom level 13 after form submission displaying
two map markers with the business name (Reality decor) marking the two locations of the business.
A form validation javascript functions validating the following:
1. First & Last name field validation; must be alphabet characters only, if not true will display alert message to correct the field.
2. Email address field validation; must be an email address format, if not true will display alert message to correct the field.
3. Message field validation; must be more than 15 characters, if not true will display alert message to correct the field.

Also added a bad word validation function that will detect bad words in the message field and replace them with stars, for testing this
function please use any of these words in the message (bad1, bad2, bad3) which can be replaced by chosen words in sendEmail.js/Abuse function.


## Technologies Used

HTML, CSS, APIs, jQuery, and javaScript

link to bootstrap 4.2.1 for bootstrap styles to work

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" type="text/css" />

link to bootstrap 3.4.1 for carousel to work

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />

link to cloudflare.com styles for hover to work

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/style.css">

javascript source link from bootstrap for carousel to work

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

javascript source link for modal function

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

javascript source link to emailjs in order to send emails to work

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>

javascript source link to google APIs for google map to work

    <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDHHyac2SiOYPNYxXMK7rqJjnB8nCaaxE&callback=initMap"></script>

Marker Clusterer link for markers to work

    https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'


## Testing

Tested all links in the project, they are all working as intended.

Tested the project on Google DevTools, The project works on all screen sizes as intended.

Created and tested 2 email templates at https://dashboard.emailjs.com/templates, tested both templates, they are both working
as intended, please see images;
1. Filled contact form https://hameederrawi.github.io/IFDM-Project/emailTestImages/sample_form_filled.jpg
2. Contact page after form submission https://hameederrawi.github.io/IFDM-Project/emailTestImages/sample_form_sent.jpg
3. emailJS template for contact form https://hameederrawi.github.io/IFDM-Project/emailTestImages/reality_contact.jpg
4. emailJS template for modal form https://hameederrawi.github.io/IFDM-Project/emailTestImages/reality_modal.jpg
5. emailJs template for contact form autoreply https://hameederrawi.github.io/IFDM-Project/emailTestImages/reality_contact_template_autoreply.jpg
6. emailJs template for modal form autoreply https://hameederrawi.github.io/IFDM-Project/emailTestImages/reality_modal_template_autoreply.jpg
7. Auto reply send to customer email address https://hameederrawi.github.io/IFDM-Project/emailTestImages/auto_reply_ToCustomer.jpg
8. Email received by business owner as result of form submission https://hameederrawi.github.io/IFDM-Project/emailTestImages/sample_email_recived_from_form.jpg

## Deployment

project was deployed to Github by;
git add .
git commit -m "..."
git push

## Credits

Code institute, Google dev tools, Bootstrap, Cloudflare, Googleapis, Stackoverflow, W3schools, Codepen

### Content

The text for "About Section" was copied from http://www.as-creation.com/company/about-us.html

### Media

The photos used in this site were obtained from Reality Decor and from The A.S. Création Group

### Acknowledgements

I received inspiration for this project from Code institute, Myself and my Wife.

I started this project from the codeinstitute Resume Project "Rosie Odenkirk" code and template (as mentioned in the tutorial),
I adjusted code, design and added my code as I needed for my project look, feel and function.
I added the bootstrap modal in the products pages (get a quote - button) using the code learned in the "Whiskey Drop" codeinstitute
tutorial with some modifications by myself.

I used the carousel code from bootstrap and made some adjustment to reflect my intentions.

I used text effext code (class .strokeme from stackoverflow.com).

I used text effext code (class p::first-letter from w3schools.com).

I used Zoom Hover effect from (https://codepen.io/preecb/pen/mdJJdLy).

I used inspiration for form validation codes from w3schools which pointed in the direction I needed for my code.

I used code for Social media icons change to respective color upon hover from https://stackoverflow.com


#### Notes

