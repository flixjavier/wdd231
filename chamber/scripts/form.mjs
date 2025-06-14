/* 
const getString = window.location.search;

console.log(getString);

const myInfo = new URLSearchParams(getString);

console.log(myInfo);
console.log(myInfo.get("timestamp"));

const form = document.querySelector("form");
form.addEventListener("submit", function() {
  document.getElementById("timestamp").value = Date.now();
});

console.log(document.getElementById("timestamp")); // Should not be null
document.querySelector("#results").innerHTML = `
<p>Appointment for: ${myInfo.get("first")} ${myInfo.get("last")}</p> <p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} Temple</p>
<p> Your phone number is: ${myInfo.get("phone")}</p>
<p> Your email is: ${myInfo.get("email")}</p>`
 */



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