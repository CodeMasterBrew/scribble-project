var desc = document.getElementById("desc");

var editPost = document.getElementById("edit-post");

var liked = document.getElementById("like");

editPost.onclick = function(){
    if(desc.disabled){
        desc.disabled=false;
        desc.style.border="1px solid purple";
        editPost.innerHTML="Save &#xf0c7;";
    }
    else{
        desc.disabled=true;
        desc.style.border="none";
        editPost.innerHTML="Edit &#xf044";
    }
}

liked.onclick = function(){
    liked.innerHTML="Liked";
    document.getElementById("like-message").innerHTML="1 people have liked this!"
}