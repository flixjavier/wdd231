import { places } from "../data/places.mjs";

console.log(places);

const showHere = document.querySelector("#allplaces");

function displayItems(places){
  places.forEach(x => {
    const thecard = document.createElement("div");
    const figureTag = document.createElement("figure");
    const thephoto = document.createElement("img");
    thephoto.src = `images/${x.photo}`;
    thephoto.alt = x.Name;
    thephoto.setAttribute("loading", "lazy");
    thephoto.setAttribute("width", "300");
    thephoto.setAttribute("height", "200");
    figureTag.appendChild(thephoto);
    thecard.appendChild(figureTag);
    const title = document.createElement("h2");
    title.innerHTML = x.Name;
    thecard.appendChild(title);
    const address = document.createElement("address");
    address.innerText = x.Address;
    thecard.appendChild(address);
    const description = document.createElement("p");
    description.innerHTML = `${x.Description} <br>Score: ${x.Score}`;
    thecard.appendChild(description);
    const button = document.createElement("button");
    button.innerText = "Learn More";
    thecard.appendChild(button);
    showHere.appendChild(thecard);
  });
}

displayItems(places);

// Visitor tracking functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Get DOM elements
            const visitMessage = document.getElementById('visitMessage');
            const messageContent = document.getElementById('messageContent');
            const closeButton = document.querySelector('.visit-message .close');
            
            // Get current time in milliseconds
            const currentTime = Date.now();
            
            // Get last visit time from localStorage
            const lastVisit = localStorage.getItem('lastVisit');
            
            // Calculate days between visits
            let daysBetween = 0;
            if (lastVisit) {
                daysBetween = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));
            }
            
            // Create message based on visit history
            let message;
            if (!lastVisit) {
                message = "Welcome! Let us know if you have any questions.";
            } else if (daysBetween === 0) {
                message = "Back so soon! Awesome!";
            } else {
                message = `You last visited ${daysBetween} ${daysBetween === 1 ? 'day' : 'days'} ago.`;
            }
            
            // Display message
            messageContent.textContent = message;
            visitMessage.style.display = 'block';
            
            // Update localStorage with current visit time
            localStorage.setItem('lastVisit', currentTime);
            
            // Close button functionality
            closeButton.addEventListener('click', function() {
                visitMessage.style.display = 'none';
            });
        });