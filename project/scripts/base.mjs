import { apiFetch } from "./api.js";
import { onions } from "./data.js";

//Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

console.log(onions);



hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
  
});

//logo link
const logo = document.querySelector(".logo-container");
logo.addEventListener("click", () => {homeTemplate()});

//home link
const home = document.querySelector(".home");
home.addEventListener("click", () => {homeTemplate()});

//conctact Us link
const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {contactUsTemplate()});

//onions Link

const onionLink = document.querySelector(".onions");
onionLink.addEventListener("click", () => {onionsCardsTemplate(onions)});

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Remove 'active' from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add 'active' to the clicked link
    this.classList.add('active');
    // Optionally: prevent default and render your page here
    // event.preventDefault();
    // renderPage(this.getAttribute('href'));
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash || '#home';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.classList.add('active');
    }
  });
});



//create Home page
function homeTemplate() {
  document.querySelector(".main").innerHTML = "";
	const template = document.querySelector(".main"); 

  const homeTemplate = document.createElement("div"); 
  homeTemplate.className = "template";
  
  homeTemplate.innerHTML = `
  <div class="hero-container">
    <figure class="hero"><img src="images/marketonions.webp" alt="Market Onions"  loading="lazy"> </figure>
    <div class="hero-text">
      <h3>AGROAVE Mexican Onions</h3>
      <p class="hero-text">From México 🇲🇽 to the World 🌎</p>
    </div>
  </div>
  <section class="info">
    <div class="info-container">
      <figure class="cards" id="redOnion"><img src="images/redonions.webp" alt="Red Onions"  loading="lazy"> </figure>
      <figure class="cards" id="whiteOnion"><img src="images/whiteonions.webp" alt="White Onions"  loading="lazy"> </figure>
      <figure class="cards" id="yellowOnion"><img src="images/yellowonions.webp" alt="Yellow Onions"  loading="lazy"></figure>
      <div class="info-text">
        <h3>Organic Onions</h3>
        <p>We are an organic certified company that produce only the best quality of onions. Our onions are ready to export to different countries like U.S.A., Argentina, Guatemala and El Salvador. Our crops are organic and with the best quality. <span>If you wanto to know more about our products, please contact us</span>. </p>
        <button type="button" onclick="contactUsTemplate()"> Contact Us</button>
      </div>
    </div>
  </section>
  `;

  template.appendChild(homeTemplate);
}

//create contact Us
function contactUsTemplate() {
  document.querySelector(".main").innerHTML = "";
	const template = document.querySelector(".main"); 

  const contactTemplate = document.createElement("div"); 
	contactTemplate.className = "template";
		
  contactTemplate.innerHTML = `
  <form onsubmit="submitForm(event)" method="get" class="form">
    <label for="fname">Nombre:</label>
    <input id="fname" type="text" name="firstname" placeholder="Nombre" required>

    <label for="lname">Apellidos:</label>
    <input id="lname" type="text" name="lastname" placeholder="Apellidos" required>

    <label for="email">Email:</label>
    <input id="email" type="email" name="email" placeholder="someone@gmail.com" required>

    <label for="phone">Número Teléfono:</label>
    <input id="phone" type="tel" name="phone" placeholder="6141755234" required>

    <label for="textarea">Mensaje:</label>
    <textarea id="textarea" name="contact" placeholder="Escribe tu mensaje aquí..." required></textarea>

    <button type="submit" value="Submit">Click Me!</button>
  </form>
  `;

  template.appendChild(contactTemplate);
}

window.contactUsTemplate = contactUsTemplate;

function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('textarea').value;

  // Construct the mailto URL
  const mailtoUrl = `mailto:aveproducto77@hotmail.com?subject=Mensaje Enviado&body=Nombre: ${encodeURIComponent(fname)} ${encodeURIComponent(lname)}%0ATeléfono: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(message)}`;

  // Open the mailto URL
  window.location.href = mailtoUrl;

  // Redirect to thank you page after a delay
  setTimeout(() => {
      window.location.href = 'thanks.html';
  }, 1000); // Adjust the delay as needed
}

function onionsCardsTemplate(array) {
  document.querySelector(".main").innerHTML = "";
	const cardsTemplate = document.querySelector(".main"); 

  array.forEach(onion => {
    const cardTemplate = document.createElement("div");
    cardTemplate.className = "card-template";

    cardTemplate.innerHTML = `
      <div class="wrapper">
        <div class="banner-image"> </div>
        <figure><img src="${onion.imageSCR}" alt="${onion.onionName}"  loading="lazy" width="300" height="auto"><figure>
        <h1>${onion.onionName}</h1>
        <p>Corte: ${onion.corte}<br/>
          Siembra: ${onion.siembra}</p>
      </div>
      <div class="button-wrapper"> 
        <button class="btn outline">DETAILS</button>
        <button class="btn fill">BUY NOW</button>
      </div>`;
    cardsTemplate.appendChild(cardTemplate);
  });
};

homeTemplate();
apiFetch();

// use the date object
const today = new Date();

const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // 24-hour format
};

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);

const year = document.querySelector("#current-year");

const lastModified = document.querySelector("#lastModified");

const footerInfo = document.querySelector(".footer-info");

const socialIcons = document.querySelector(".social-icons");

footerInfo.innerHTML = `<address>
					<strong>Casas Grandes Chamber of Commerce</strong><br />
					123 Main Street<br />
					Casas Grandes, CHH 12345<br />
					info@casasgrandescc.org<br />
					(636) 555-2300
				</address>`

socialIcons.innerHTML = `<img src="images/youtube.svg" alt="YouTube" /><img src="images/X_twitter.svg" alt="Twitter" /><img src="images/linkedin.svg" alt="LinkedIn" />`
	

year.innerHTML = `<span class="highlight">&copy${today.getFullYear()} WDD231 Class Project |
				Felix Flores<br /> Casas Grandes Chamber of Commerce<br /></span> <img
				src="images/logo.svg"
				alt="Company logo"
				class="flag"
				width="50"
				height="50"
			/>`;
      /* can add loading="Lazy" */

lastModified.innerHTML = `<span class="highlight">Last modification: ${formattedDate}</span>`; 