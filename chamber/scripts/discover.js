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