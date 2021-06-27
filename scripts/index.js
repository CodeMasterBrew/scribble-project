var signInModal = document.getElementById("sign-in-modal");
var signUpModal = document.getElementById("sign-up-modal");
var createPostModal = document.getElementById("create-modal");

// Get the button that opens the modal
var signInBtn = document.getElementById("sign-in");
var signUpBtn = document.getElementById("sign-up");
var createPostBtn = document.getElementById("create-post");

// Get the <span> element that closes the modal
var closeSignInModal = document.getElementsByClassName("close")[0];
var closeSignUpModal = document.getElementsByClassName("close")[1];
var closePostModal = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
signInBtn.onclick = function () {
    signInModal.style.display = "block";
}

signUpBtn.onclick = function () {
    signUpModal.style.display = "block";
}

createPostBtn.onclick = function () {
    createPostModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSignInModal.onclick = function () {
    signInModal.style.display = "none";
}

closeSignUpModal.onclick = function () {
    signUpModal.style.display = "none";
}

closePostModal.onclick = function () {
    createPostModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
    else if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    else if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
}