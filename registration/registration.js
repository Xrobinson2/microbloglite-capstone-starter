"use strict"



const inputFullName = document.getElementById('inputFullName');
const inputEmail = document.getElementById('inputEmail');
const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');
const inputConfirmPassword = document.getElementById('inputConfirmPassword');
const termsOfService = document.getElementById('termsOfService');
const newsLetter = document.getElementById('newsLetter');
const signInButton = document.getElementById('signInButton');

//test
let bodydata = {
    "username": "Killua123",
    "fullName": "Hunter Smith",
    "password": "Djflyer1999"
  }

window.onload = () =>{
    console.log("connected");
    // console.log(apiBaseURL);
    registerUser();
}


function registerUser(){
    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",
        {
            method: "POST",
            body: JSON.stringify(bodydata), 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    .then(response) = () => {
        console.log(response.status) 
        } 
           if(response.status == 400){  
        }
        response.json()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
}