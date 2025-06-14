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
            "Access to business workshops",
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
            "Priority access to workshops",
            "Networking events (8 per year)",
            "Free admission to 2 annual events",
            "Business spotlight in newsletter",
            "Access to premium resources"
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
            "Free advertising in newsletter",
            "Annual business award eligibility",
            "Exclusive networking opportunities",
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
    mytitle.innerHTML = `${x.name}`;
    mydialog.showModal();
    myinfo.innerHTML = `Dedicated ${x.dedicated} <br />
    By: ${x.person} <br />
    As temple number: ${x.number}`;
 }



// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('form');
    
    // Only proceed if the form exists
    if (form) {
        // Set timestamp on form submission
        form.addEventListener('submit', function(event) {
            // Prevent default form submission for demonstration
            // Remove this in production when using GET method
            event.preventDefault();
            
            // Set timestamp value
            document.getElementById('timestamp').value = new Date().toISOString();
            
            // For demonstration: show confirmation
            alert('Form would submit with timestamp: ' + document.getElementById('timestamp').value);
            
            // In production, uncomment this to actually submit the form
            // form.submit();
        });
    } else {
        console.error('Form element not found');
    }
    
    // Log form parameters for debugging (if on thank you page)
    const queryString = window.location.search;
    console.log('Query string:', queryString);
    
    if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        console.log('Form parameters:', Object.fromEntries(urlParams.entries()));
        
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
    
    // Set current year and last modified in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = `© ${currentYear} Casas Grandes Chamber of Commerce`;
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});