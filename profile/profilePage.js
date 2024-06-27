"use strict"



// Declare constants for elements
const postForm = document.getElementById('postForm');
const postContent = document.getElementById('postContent');
const postFeed = document.getElementById('postFeed');





// JavaScript for handling form submission and post creation
postForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    var content = postContent.value.trim();
    if (content !== '') {
        var newPost = document.createElement('div');
        newPost.className = 'post card'; // Added 'card' class for styling
        newPost.innerHTML = '<p>' + content + '</p>';
        
        // Create and append like button
        var likeButton = createLikeButton();
        newPost.appendChild(likeButton);
        
        postFeed.insertBefore(newPost, postFeed.firstChild); // Insert at the beginning for cascading effect
        postForm.reset(); // Reset the form after posting
    }
});

function createPostForUser () {
    const loginToken = getLoginData();

    let postBody = {
        "text": document.getElementById("createPost").value,
    };

    const options = {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8",
            Authorization: `Bearer ${loginToken.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
   
};



function createLikeButton() {

    let likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.className = 'like-button';
    likeButton.addEventListener('click', function() {
        let likeCount = parseInt(likeButton.dataset.likes || 0, 10);
        likeCount++;
        likeButton.textContent = 'Liked (' + likeCount + ')';
        likeButton.dataset.likes = likeCount;
    });
    return likeButton;
}