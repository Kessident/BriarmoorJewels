let galleryImageCount = 0;
let galleryImageCurrent = document.getElementById("galleryCurrentImage");
let galleryImageNext = document.getElementById("galleryNextImage");
let galleryImages = document.getElementsByClassName("galleryImages");
for (let i = 1; i < galleryImages.length; i++){
  galleryImages[i].style.display = "none";
}


function galleryTransition() {

  if (galleryImageCount === galleryImages.length - 1) {
    galleryImages[0].style.display = "block";
  } else {
    galleryImages[galleryImageCount + 1].style.display = "block";
  }

  galleryImages[galleryImageCount].style.display = "none";
  galleryImageCount++;

  if (galleryImageCount >= galleryImages.length) {
    galleryImageCount = 0;
  }


  setTimeout(galleryTransition, 1000);
}

galleryTransition();

// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//   var slideArray = document.getElementsByClassName("mySlides");
//   if (n > slideArray.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slideArray.length
//   }
//   for (let i = 0; i < slideArray.length; i++) {
//     slideArray[i].style.display = "none";
//   }
//   slideArray[slideIndex - 1].style.display = "block";
// }
