var deleteModal = document.getElementById("delete-modal");

// Get the button that opens the modal
var deleteBtn1 = document.getElementsByClassName("delete-button")[0];
var deleteBtn2 = document.getElementsByClassName("delete-button")[1];
var deleteBtn3 = document.getElementsByClassName("delete-button")[2];
var deleteBtn4 = document.getElementsByClassName("delete-button")[3];
var deleteBtn5 = document.getElementsByClassName("delete-button")[4];
var check = document.getElementById("confirm");
var cancel = document.getElementById("cancel");

// When the user clicks the button, open the modal 
deleteBtn1.onclick = function () {
    deleteModal.style.display = "block";
}

deleteBtn2.onclick = function () {
    deleteModal.style.display = "block";
}

deleteBtn3.onclick = function () {
    deleteModal.style.display = "block";
}

deleteBtn4.onclick = function () {
    deleteModal.style.display = "block";
}

deleteBtn5.onclick = function () {
    deleteModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
check.onclick = function () {
    deleteModal.style.display = "none";
}

cancel.onclick = function () {
    deleteModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
}