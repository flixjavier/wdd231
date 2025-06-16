import { places } from "../data/places.mjs";

console.log(places);

const showHere = document.querySelector("#allplaces");

function displayItems(places){
  places.forEach(x => {
    const thecard = document.createElement("div");
    const thephoto = document.createElement("img");
    thephoto.src = `images/${x.photo}`;
    thephoto.alt = x.Name;
    thecard.appendChild(thephoto);
    const title = document.createElement("h2");
    title.innerHTML = x.Name;
    thecard.appendChild(title);
    const address = document.createElement("address");
    address.innerText = x.Address;
    thecard.appendChild(address);
    const description = document.createElement("p");
    description.innerText = `${x.Description}`;
    thecard.appendChild(description);
    const score = document.createElement("p");
    score.innerText = `Score: ${x.Score}`;
    thecard.appendChild(score);

    showHere.appendChild(thecard);

  });
}

displayItems(places);