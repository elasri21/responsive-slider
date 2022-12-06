const images = Array.from(document.querySelectorAll(".image"));
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
let id = 0;
images.forEach(image => {
    image.setAttribute("id", id);
    id++;
});
const all = images.length;
// current is the id of the current image
let current = document.querySelector(".active").id;

// click the left button
btnRight.addEventListener("click", function() {
    current++;
    // check if the current image is the last one
    if(current == all) {
        // set current to 0
        current = 0;
    }
    // loop through all images and
    for(let i = 0; i < all;i++) {
        if(i == current) {// show the image with current as id
            images[i].classList.add("active");
            images[i].classList.remove("hide");
        } else { // hide other images
            images[i].classList.add("hide");
            images[i].classList.remove("active");
        }
    }
    // console.log(current)
});

// click the right button
btnLeft.addEventListener("click", function() {
    // check if current image is the first image
    if(current == 0) {// if so show the last image
        current = all;
    }
    // decrement current
    current--;
    for(let i = 0; i < all;i++) {
        // loop through all images 
        if(i == current) {// show the image that hs current as id
            images[i].classList.add("active");
            images[i].classList.remove("hide");
        } else {// and hide all the others
            images[i].classList.add("hide");
            images[i].classList.remove("active");
        }
    }
    // console.log(current)
});
