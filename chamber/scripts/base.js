const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector("#animateme");

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerElement.classList.toggle("open");
});

const jsonFile = "data/members.json";

async function getData() {
  const response = await fetch(jsonFile);
  const data = await response.json();
  //console.table(data.companies); // temporary testing of data response
  displayCompanies(data.companies);
}

getData();


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

year.innerHTML = `<span class="highlight">&copy${today.getFullYear()} Felix Javier Flores Zamarripa | Mexico</span> <img
				src="images/logo.svg"
				alt="Company logo"
				class="flag"
				width="50"
				height="50"
			/>`;
      /* can add loading="Lazy" */

lastModified.innerHTML = `<span class="highlight">Last modification: ${formattedDate}</span>`; 

const cards = document.querySelector('#cards');


/**
 * The function `displayCompanies` creates HTML elements for each companie in the input array and appends
 * them to a parent element.
 * @param companies - An array of objects representing companies of the city, where each object contains the
 * following properties:
 */
const displayCompanies = (companies) => {
  
  companies.forEach(company => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const webUrl = document.createElement('a');
  

    fullName.textContent = `${company.name}`;
    portrait.setAttribute('src', company.icon);
    portrait.setAttribute('alt', `logo of ${company.name} ${company.industry}`);
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', '300');
    portrait.setAttribute('loading', 'lazy');
    address.textContent = `Adress: ${company.address}`;
    phone.textContent = `Phone: ${company.phone}`;
    webUrl.textContent = `${company.website}`;
    webUrl.setAttribute('href', company.webUrl);
    webUrl.setAttribute('target', '_blank');
    

    card.appendChild(portrait);
    card.appendChild(fullName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(webUrl);
    cards.appendChild(card);
  });

  
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

