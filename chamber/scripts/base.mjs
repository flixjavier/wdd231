import { apiFetch } from './weather_API.mjs';
import { getData } from './getData.mjs';

const currentPage = window.location.pathname.split("/").pop();
const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerElement.classList.toggle("open");
});

const jsonFile = "data/members.json";
getData(jsonFile);

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

// Weather API
apiFetch(); // Call the function to fetch and display weather data

//sportlight: 

const spotlight = document.querySelector('#spotlight');


