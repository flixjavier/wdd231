import { temples } from "../data/temples.js";;
//console.log(temples);

import { url } from "../data/temples.js";;
//console.log(url);

const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

//event listener for the dialog close button
myclose.addEventListener("click", () => {
    mydialog.close();
});

// Function to display temple information in a dialog
//loop through the temples array and create a button for each temple

function displayItems(data){
  console.log(data);
  data.forEach(x => {
    console.log(x);
    const photo = document.createElement("img");
    photo.src = `${url}${x.path}`;
    photo.alt = `${x.name}`;
    photo.setAttribute("loading", "lazy");
    photo.setAttribute("width", "400");
    photo.addEventListener("click", () => showStuff(x));
    showHere.appendChild(photo);
  });
}

displayItems(temples);

function showStuff(x) {
  mytitle.innerHTML = `${x.name}`;
  mydialog.showModal();
  myinfo.innerHTML = `Dedicated ${x.dedicated} <br />
  By: ${x.person} <br />
  As temple number: ${x.number}`;
}