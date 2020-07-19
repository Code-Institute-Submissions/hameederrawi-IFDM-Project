

## Reality Decor Website

<p>
    <a href="https://hameederrawi.github.io/IFDM-Project/" rel="nofollow">View the live project here.</a>
</p>

This is the main marketing website for Reality Decor. 
It is designed to be responsibe and accessible on a range of devices, 
making it easy to navigate for potential customers.

<img src="/assets/images/responsive_images.jpg">

Reality Decor are the Middle-East distributors for THE A.S. CRÉATION GROUP that specialises in high quality wallpaper and furniture.

The wallpapers are primarily produced in Germany at A.S. Création Tapeten AG on the site in Wiehl-Bomig.

Reality Decor offers its customers a wide range of services: comprehensive departmental planning, shop-fitting, ordering, decoration, individual marketing concepts, sales promotional packages, concepts for point-of-sale (POS), as well as a 24-hour delivery service.

## User Experience (UX)

This website has many products on display that will help the user to select from and request a quote on products they are interested in purchasing.

<p style="font-size: 16px; font-weight:bold">User Stories:</p>

As a user, I would like :

<ul>
    <li class="whyWallpaper-ul-li">A simple and clean looking website.</li>
    <li class="whyWallpaper-ul-li">A website that I could navigate easily through.</li>
    <li class="whyWallpaper-ul-li">A website that I could use on desktop, tablets and mobile devices.</li>
    <li class="whyWallpaper-ul-li">To find out the product I am looking for easily</li>
    <li class="whyWallpaper-ul-li">A contact form, to be able to contact the business owners for queries.</li>
    <li class="whyWallpaper-ul-li">To know the location of the business if I need to visit.</li>
</ul>


<p style="font-size: 15px; font-weight:600">The website has been designed for mobile first approach:</p>

The website header will appear different from smaller devices to larger devices, on larger devices (768 width and larger screens) a logo image will appear,

which will not be visible on smaller devices to give easier user experience in browsing.


The Home page is divided into three sections;

<ul>
    <li class="whyWallpaper-ul-li">Fisrt section, the header image and links to other pages.(A logo that will only appear on 768 width and larger screens.</li>
    <li class="whyWallpaper-ul-li">Second section, a Carousel displaying featured products.</li>
    <li class="whyWallpaper-ul-li">Third section, a footer with company details, a download link for product catalogue and social media links.</li>    
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Using the website links:</p>
<br>
<ul>
    <li class="whyWallpaper-ul-li">Logo: on click - redirects the user to the home page (only visible on screens wider than 768).</li>
    <li class="whyWallpaper-ul-li">Home: on click - redirects the user to the home page.</li>
    <li class="whyWallpaper-ul-li">About Us: on click - redirects the user to the about page for a brief introduction to the business.</li>
    <li class="whyWallpaper-ul-li">Products: on click - redirects the user to the products page.</li>
    <li class="whyWallpaper-ul-li">products modal: popup modal for "get a quote" on selected product.</li>
    <li class="whyWallpaper-ul-li">Contact: on click - redirects the user to the contact page, displaying a form for submission with required and optional fields.</li>
    <li class="whyWallpaper-ul-li">Social: on click - redirects the user to the relevant social network.</li>        
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Mockups links:</p>

<ul>
    <li class="whyWallpaper-ul-li"><a href="https://github.com/hameederrawi/IFDM-Project/tree/master/assets/images/mockup" target="_blank">https://github.com/hameederrawi/IFDM-Project/tree/master/assets/images/mockup</li></a>
    <li class="whyWallpaper-ul-li"><a href="/assets/images/mockup/mockup.pdf" target="_blank">Click here to view mockup diagrams</li></a>        
</ul>


## Features

<ul>
    <li class="whyWallpaper-ul-li">Responsive on all device sizes</li>
    <li class="whyWallpaper-ul-li">Interactive elements</li>        
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Features Details:</p>


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

<p style="font-size: 16px; font-weight:bold">Using the website and features:</p>

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

The form will be validated before submission, if there is any errors, the user will be presented with alert message explaining the nature

of the error, when all validations are passed, the form will submit, the form section will be replaced displaying a message 

with the user first and last name, thanking them for their message and the team signature bellow the message.

At this stage the form details are transmitted to the website owners for processing and the user will receive an auto reply email to the email address

they provided in the email address form field.

The website has the following main links:

<ul>
   <li class="whyWallpaper-ul-li"><a href="https://hameederrawi.github.io/IFDM-Project/index.html">Home</li></a>
   <li class="whyWallpaper-ul-li"><a href="https://hameederrawi.github.io/IFDM-Project/about.html">About</li></a>
   <li class="whyWallpaper-ul-li"><a href="https://hameederrawi.github.io/IFDM-Project/contact.html">Contact</li></a>
   <li class="whyWallpaper-ul-li"><a href="https://hameederrawi.github.io/IFDM-Project/products.html">Products</li></a>
   <li class="whyWallpaper-ul-li"><a href="https://hameederrawi.github.io/IFDM-Project/wallCoverings.html">Wallcoverings</li></a>
   <li class="whyWallpaper-ul-li"><a href="https://hameederrawi.github.io/IFDM-Project/whyWallparer.html">Why Wallparer</li></a>
</ul>

## Technologies Used

<p style="font-size: 16px; font-weight:bold">The project uses the following Technologies:</p>

<ul>
   <li class="whyWallpaper-ul-li">HTML</li>
   <li class="whyWallpaper-ul-li">CSS</li>
   <li class="whyWallpaper-ul-li">APIs</li>
   <li class="whyWallpaper-ul-li">JQuery</li>
   <li class="whyWallpaper-ul-li">JavaScript</li>
</ul>

<br>
<ul>
   <li class="whyWallpaper-ul-li">The project uses APIs for google maps and contact form.</li>
   <li class="whyWallpaper-ul-li">The project uses JQuery to simplify DOM manipulation.</li>
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Frameworks, Libraries & Programs Used</p>
<br>

<ol>
   <li class="whyWallpaper-ul-li"><a href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">Bootstrap 4.2.1:</a></li>
        <ul>
        <li>Bootstrap was used to assist with the responsiveness and styling of the website.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">Bootstrap 3.4.1:</a></li>
        <a href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">jQuery</a>
        <ul>
        <li>Bootstrap and jQuery was used for carousel in the home page to work</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">Font Awesome:</a></li>
        <ul>
        <li>Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css">Hover.css:</a></li>
        <ul>
        <li>Cloud flare was used for hover effects</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js">jQuery:</a></li>
        <ul>
        <li>jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">Google Map:</a></li>
        <ul>
        <li>Google APIs was used for displaying Google map.</li>
        </ul>    
    <li class="whyWallpaper-ul-li"><a href="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">Markerclusterer:</a></li>
        <ul>
        <li>Markerclusterer was used to place markers on Google maps.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js">EmailJS:</a></li>
        <ul>
        <li>EmailJS API was used for contact form email function.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://code.jquery.com/jquery-3.3.1.slim.min.js">Modal:</a></li>
    <a href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js">Modal Popper:</a>
        <ul>
        <li>jQuery was used as well as Bootstrap for Modal on product page "get Quote" to work with EmailJS above.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://git-scm.com">Git</a></li>
        <ul>
        <li>Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://github.com">GitHub</a></li>
        <ul>
        <li>GitHub is used to store the projects code after being pushed from Git.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://www.coreldraw.com">CorelDRAW</a></li>
        <ul>
        <li>CorelDRAW was used to create the logo, resizing images and editing photos for the website.</li>
        </ul>
    <li class="whyWallpaper-ul-li"><a href="https://github.com">GitHub</a></li>
        <ul>
        <li>GitHub is used to store the projects code after being pushed from Git.</li>
        </ul>
</ol>


## Testing

Tested all links in the project, they are all working as intended.
Tested to be ok the html, css and js code in 

<ul>
   <li class="whyWallpaper-ul-li"><a href="https://validator.w3.org">W3C Markup Validator</a> - <a href="/assets/images/htmlCssValidator/testhtml.jpg">Results</a></li>
   <li class="whyWallpaper-ul-li"><a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validator</a> - <a href="/assets/images/htmlCssValidator/test_css.jpg">Results</a></li>
   <li class="whyWallpaper-ul-li"><a href="https://esprima.org/demo/validate.html">JS Validator</a> - <a href="/assets/images/htmlCssValidator/test_js.jpg">Results</a></li>  
</ul>

## Further Testing

<ul>
    <li>The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.</li>
    <li>The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.</li>
    <li>The website was tested on Google DevTools, The website works on all screen sizes as intended.</li>
    <li>A large amount of testing was done to ensure that all pages were linking correctly.</li>
    <li>Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.</li>
    <li>Created and tested 2 email templates at:</li>
        <br>
        <ul>
            <li class="whyWallpaper-ul-li"><a href="https://dashboard.emailjs.com/templates">https://dashboard.emailjs.com/templates</li></a>
            <li>Tested both templates, they are both working as intended.</li>
        </ul>   
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Contact Form Testing:</p>
<br>

<ul>
   <li class="whyWallpaper-ul-li">Go to the Contact Page.</li>
   <li class="whyWallpaper-ul-li">Try to submit an empty form, invalid email address, invalid fields or a short contact message.</li>
   <li class="whyWallpaper-ul-li">The browser will display a popup alert message indicating the error to be corrected.</li>
   <li class="whyWallpaper-ul-li">Message will be sent after all errors are corrected.</li>
</ul>
<br>
<p style="font-size: 16px; font-weight:bold">Contact form successful submission images:</p><br>

1. Filled contact form 
<br><br><img src="/assets/images/emailTestImages/sample_form_filled.jpg" width= 100%><br><br>
2. Contact page after form submission 
<br><br><img src="/assets/images/emailTestImages/sample_form_sent.jpg" width=100%><br><br>
3. emailJS template for contact form 
<br><br><img src="/assets/images/emailTestImages/reality_contact.jpg" width=100%><br><br>
4. emailJS template for modal form 
<br><br><img src="/assets/images/emailTestImages/reality_modal.jpg" width=100%><br><br>
5. emailJs template for contact form auto-reply 
<br><br><img src="/assets/images/emailTestImages/reality_contact_template_autoreply.jpg" width=100%><br><br>
6. emailJs template for modal form auto-reply 
<br><br><img src="/assets/images/emailTestImages/reality_modal_template_autoreply.jpg" width=100%><br><br>
7. Auto reply send to customer email address 
<br><br><img src="/assets/images/emailTestImages/auto_reply_ToCustomer.jpg" width=100%><br><br>
8. Email received by business owner as result of form submission 
<br><br><img src="/assets/images/emailTestImages/sample_email_recived_from_form.jpg" width=100%><br><br>


## Known Bugs

<ul>
   <li class="whyWallpaper-ul-li">On some mobile devices white gap can be seen to the bottom of the footer.</li>
</ul>

## Deployment

<br>
<p style="font-size: 16px; font-weight:bold">GitHub Pages</p>
<br>


The project was deployed to GitHub Pages using the following steps..

<ol>
   <li class="whyWallpaper-ul-li">Log in to GitHub and locate the <a href="https://github.com">GitHub Repository</a></li>
   <li class="whyWallpaper-ul-li">At the top of the Repository (not top of page), locate the "Settings" Button on the menu.</li>
      <ul>
         <li class="whyWallpaper-ul-li">Alternatively Click <a href="https://github.com">for a GIF demonstrating the process starting from Step 2.</a></li>
      </ul>   
   <li class="whyWallpaper-ul-li">Scroll down the Settings page until you locate the "GitHub Pages" Section.</li>
   <li class="whyWallpaper-ul-li">Under "Source", click the dropdown called "None" and select "Master Branch".</li>
   <li class="whyWallpaper-ul-li">The page will automatically refresh.</li>
   <li class="whyWallpaper-ul-li">Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.</li>
</ol>

<br>
<p style="font-size: 16px; font-weight:bold">Forking the GitHub Repository</p>
<br>

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

<ol>
    <li>Log in to GitHub and locate the <a href="https://github.com">GitHub Repository</a></li>
    <li>At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.</li>
    <li>You should now have a copy of the original repository in your GitHub account.</li>
</ol>

<br>
<p style="font-size: 16px; font-weight:bold">Making a Local Clone</p>
<br>

<ol>
    <li>Log in to GitHub and locate the <a href="https://github.com">GitHub Repository</a></li>
    <li>Under the repository name, click "Clone or download".</li>
    <li>To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.</li>
    <li>Open Git Bash</li>
    <li>Change the current working directory to the location where you want the cloned directory to be made.</li>
    <li>Type git clone, and then paste the URL you copied in Step 3.</li>
    <br>
    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    <br><br>
    <li>Press Enter. Your local clone will be created.</li>
    <br>
    <pre>
        <code>
        $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
        > Cloning into `CI-Clone`...
        > remote: Counting objects: 10, done.
        > remote: Compressing objects: 100% (8/8), done.
        > remove: Total 10 (delta 1), reused 10 (delta 1)
        > Unpacking objects: 100% (10/10), done.
        </code>
    </pre>
    <br><br>
</ol>
<p>
Click 
<a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop">Here</a>
 to retrieve pictures for some of the buttons and more detailed explanations of the above process.
</p><br>

## Credits

<br>
<p style="font-size: 16px; font-weight:bold">Code</p>

<ul>
    <li>Code institute tutorials</li>
    <li><a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/">Bootstrap4: </a>Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.</li>
    <li><a href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css">CloudFlare: </a>For download and social network links hover effects</li>
    <li><a href="ttps://getbootstrap.com/docs/4.0/components/carousel/">Bootstrap3: </a>Used for the carousel with some adjustment to reflect my intentions. </li>
    <li><a href="https://www.w3schools.com/cssref/sel_firstletter.asp">W3schools: </a>Used for text effext code (class p::first-letter)</li>
    <li><a href="https://stackoverflow.com/questions/4919076/outline-effect-to-text">Stackoverflow: </a>For text effext code (class .strokeme from stackoverflow.com)</li>
    <li><a href="https://codepen.io/preecb/pen/mdJJdLy">Codepen: </a>For Zoom Hover effect</li>
    <li><a href="https://www.w3schools.com/tags/att_input_pattern.asp">W3schools: </a>For form validation patterns which pointed in the direction I needed for my code</li>
    <li><a href="https://stackoverflow.com/questions/45204670/social-media-icons-change-to-respective-color-upon-hover">Stackoverflow: </a>For Social media icons change to respective color upon hover</li>
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Content</p>
 

<ul>
    <li>The text for "About Section" was provided by Reality Decor.</li>
    <li>All contents was written by the developer.</li>
</ul>

<br>
<p style="font-size: 16px; font-weight:bold">Media</p>

<ul>
    <li>The photos used in this site were obtained from Reality Decor and from The A.S. Création Group</li>
    <li>All other images were created by the developer.</li>
</ul>
<br>

## Acknowledgements

<ul>
    <li>Code institute student care for thier continuous support</li>
    <li>My wife for guidance and ideas</li>
    <li>My Mentor for continuous helpful feedback</li>
</ul>
<br>

## Notes

I started this project from the codeinstitute Resume Project "Rosie Odenkirk" code and template (as mentioned in the tutorial),
I adjusted code, design and added my code as I needed for my project look, feel and function.
I added the bootstrap modal in the products pages (get a quote - button) using the code learned in the "Whiskey Drop" codeinstitute
tutorial with some modifications by myself.
