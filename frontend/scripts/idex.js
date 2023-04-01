let image = document.createElement("img");
let maindiv = document.getElementById("slideshow")
maindiv.append(image)
let c = 0


// Use the following data for slideshow
var movieImages = [
  "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Family_imgB_1200x674_20211104.jpg",
  "https://tse1.mm.bing.net/th?id=OIP.QL1RZpoNGhtMwh3CgvHNdwHaE8&pid=Api&P=0",
  "https://tse3.mm.bing.net/th?id=OIP.O5KUUIR8g3vRUlAzEqM8mAHaEK&pid=Api&P=0",
  "https://tse4.mm.bing.net/th?id=OIP.Yg8Q8zwdsTEsO5hRT3UK-gHaEK&pid=Api&P=0",
  "https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg?auto=compress&cs=tinysrgb&w=600"

]

slideshowFun(movieImages)
function slideshowFun(images) {

  image.setAttribute("src", images[c]);

  if (c == images.length - 1) {
    c = 0
  } else {
    c++
  }


}

window.addEventListener("load", function () {
  setInterval(slideshowFun, 2000, movieImages)

  // add event-listeners;
});

const totalPro = document.getElementById("count");
let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let count = 0;
for (let i = 0; i < Cart.length; i++) {
  count += Cart[i].quantity;
}

totalPro.textContent = count;