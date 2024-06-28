"use strict";





// buttons
const logoutButton = document.getElementById("logoutButton");
const cardCreate = document.getElementById("cardCreate");

// Event listener for logout button
logoutButton.addEventListener("click", onClickedLogoutButton);

// On window load
window.onload = function () {
    console.log("Page loaded");
    getAPICall();
};

// Function to handle logout button click
function onClickedLogoutButton() {
    logout();
}



// Function to fetch posts from API
function getAPICall() {
    const loginData = getLoginData(); 
    const options = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(postData => {
                createCard(postData); // Call createCard function for each post
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Function to create a card for each post
function createCard(data) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mt-5");

    let h5cardHeader = document.createElement("h5");
    h5cardHeader.classList.add("card-header");
    h5cardHeader.textContent = data.username; 
    cardDiv.appendChild(h5cardHeader);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = data.text; 
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = new Date(data.createdAt).toLocaleString(); 
    cardBody.appendChild(cardText);

    cardCreate.appendChild(cardDiv); // Append the card to the container
}
