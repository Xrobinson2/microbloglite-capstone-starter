/* Posts Page JavaScript */

"use strict";






// buttons
const logoutButton = document.getElementById("logoutButton");

window.onload = function () {
  console.log("hello");
  logoutButton.onclick = onClickedLogoutButton;
  getAPICall();
};

function onClickedLogoutButton() {
  logout();
};

function getAPICall() {
  // GET /api/users
  const loginData = getLoginData();
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  };

  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
  
  .then (response=>response.json())
  .then (data=>{
      console.log(data);
      for (let userData of data){
        createCard(userData);
        };
    });
};


// card
function createCard(data){
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mt-5");

  let h5cardHeader = document.createElement("h5");
  h5cardHeader.classList.add("card-header");
  h5cardHeader.innerHTML = data.username;
  cardDiv.appendChild(h5cardHeader);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardDiv.appendChild(cardBody);

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = data.text;
  cardBody.appendChild(cardTitle);

  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.innerHTML = data.createdAt;
  cardBody.appendChild(cardText);

  const cardCreate = document.getElementById("cardCreate");
  cardCreate.appendChild(cardDiv);
};