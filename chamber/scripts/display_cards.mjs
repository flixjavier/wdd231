const currentPage = window.location.pathname.split("/").pop();
const cards = document.querySelector('#cards');

/**
 * The function `displayCompanies` creates HTML elements for each companie in the input array and appends
 * them to a parent element.
 * @param companies - An array of objects representing companies of the city, where each object contains the
 * following properties:
 */

export const displayCompanies = (companies) => {
  
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

// Event listeners for grid and list buttons
if (currentPage === "directory.html") {
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
}