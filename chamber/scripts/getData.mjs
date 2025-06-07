import { displayCompanies } from "./display_cards.mjs";

export async function getData(json_data) {
  const response = await fetch(json_data);
  const data = await response.json();

  const page = window.location.pathname.split("/").pop();

  if (page === "index.html") {
    // Filter for membership_level 2 or 3
    const filtered = data.companies.filter(
      company => company.membership_level === 2 || company.membership_level === 3
    );
    // Shuffle and select 3
    const shuffled = filtered.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);
    console.log(selected)
    displayCompanies(selected);
  } else if (page === "directory.html") {
    displayCompanies(data.companies);
  }
}