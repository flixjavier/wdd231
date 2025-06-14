// Membership level data
const membershipData = [
    {
        level: "NP",
        title: "NP Membership",
        price: "No Cost",
        benefits: [
            "For non-profit organizations",
            "Basic listing in our directory",
            "Access to monthly newsletters",
            "Invitations to community events",
            "Social media mentions"
        ]
    },
    {
        level: "Bronze",
        title: "Bronze Membership",
        price: "$200/year",
        benefits: [
            "All NP benefits plus:",
            "Business listing in our online directory",
            "Networking events (4 per year)",
            "Discounts on chamber events",
            "Quarterly business consultations"
        ]
    },
    {
        level: "Silver",
        title: "Silver Membership",
        price: "$400/year",
        benefits: [
            "All Bronze benefits plus:",
            "Featured listing in our directory",
            "Networking events (8 per year)",
            "Free admission to 2 annual events",
            "Business spotlight in newsletter",
        ]
    },
    {
        level: "Gold",
        title: "Gold Membership",
        price: "$800/year",
        benefits: [
            "All Silver benefits plus:",
            "Premium featured listing",
            "VIP access to all events",
            "Business mentorship program",
            "Priority referrals from chamber"
        ]
    }
];

const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

//event listener for the dialog close button


if (window.location.pathname.endsWith("join.html")) {
  // Run your function here
    myclose.addEventListener("click", () => {
    mydialog.close();
    });

    function displayItems(data){
    console.log(data);
    data.forEach(x => {
        console.log(x);
        const button = document.createElement("button");
        button.classList.add("btn-info");
        button.type = "button";
        button.innerHTML = `<h3>${x.title}</h3>`;
        button.addEventListener("click", () => showStuff(x));
        showHere.appendChild(button);
        });
    }

    displayItems(membershipData);

    function showStuff(x) {
        mytitle.innerHTML = `${x.title}`;
        mydialog.showModal();
        myinfo.innerHTML = `Price: ${x.price} <br />
        Benefits: ${x.benefits[0]} <br />
        ${x.benefits[1]} <br />
        ${x.benefits[2]} <br />
        ${x.benefits[3]} <br />
        ${x.benefits[4]} <br />
        (Level:${x.level})`;
}
}

// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('form');
    
    // Only proceed if the form exists
    if (form) {
        // Set timestamp on form submission
        form.addEventListener('submit', function() {
            document.getElementById('timestamp').value = new Date().toISOString();
    // No preventDefault, let the form submit naturally
        });;
    } else {
        console.error('Form element not found');
    }
    
    // Log form parameters for debugging (if on thank you page)
    const queryString = window.location.search;
    console.log('Query string:', queryString);
    
    if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        console.log(urlParams);
        
        // If on thank you page, display results
        const resultsElement = document.getElementById('results');
        if (resultsElement) {
            resultsElement.innerHTML = `
                <p>Application submitted by: ${urlParams.get("firstname")} ${urlParams.get("lastname")}</p>
                <p>Organization: ${urlParams.get("orgname")}</p>
                <p>Membership Level: ${urlParams.get("membership")}</p>
                <p>Contact phone: ${urlParams.get("phone")}</p>
                <p>Contact email: ${urlParams.get("email")}</p>
                <p>Submitted at: ${new Date(urlParams.get("timestamp")).toLocaleString()}</p>
            `;
        }
    }
});

    // Set current year and last modified in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = `© ${currentYear} Casas Grandes Chamber of Commerce`;
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;