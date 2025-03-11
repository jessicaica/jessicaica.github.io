// Get the modal
var modal = document.getElementById("myModal");

// Get all images with class "myImage" and insert them inside the modal - use their "alt" text as a caption
var images = document.getElementsByClassName("myImage");
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}