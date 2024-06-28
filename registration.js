"use strict"



const inputFullName = document.getElementById('inputFullName');
const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');
const termsOfService = document.getElementById('termsOfService');
const newsLetter = document.getElementById('newsLetter');
const signInButton = document.getElementById("signInButton");
const inputConfirmPassword = document.getElementById("inputConfirmPassword");


//test
let TEST_bodydata = {
    "username": "Killua123",
    "fullName": "Hunter Smith",
    "password": "Djflyer1999"
  }

window.onload = () =>{
    console.log("connected");
    // console.log(apiBaseURL);
    signInButton.onclick = (event) => onSignInButtonClick(event);
}



function onSignInButtonClick(event){
    event.preventDefault();
    let bodydata = {
        "username": inputUsername.value,
        "fullName": inputFullName.value,
        "password": inputPassword.value
    }

registerUser(bodydata);
}

function registerUser(bodydata){
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",
        {
            method: "POST",
            body: JSON.stringify(bodydata), 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    .then(response => {
        console.log(response.status) 
       
           if(response.status == 400){ 
            //fail case 
        }
       return response.json()
    })
    .then(data => {
        console.log(data);
        window.location.replace("/index.html");
    })
    .catch(err => {
        
        console.log(err);
    })
}