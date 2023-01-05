//entrys in html ul
const listItems = document.querySelectorAll(".list-group-item");

document.querySelector("#search-input").addEventListener("input", filterList);

function filterList() {
  //entry search input
  const searchInput = document.querySelector("#search-input");
  //to lower case für abgleich
  const filter = searchInput.value.toLowerCase();

  //for every item in list
  listItems.forEach((item) => {
    //toString
    let text = item.textContent;
    //compare items with search only if search input is available
    if (text.toLowerCase().includes(filter.toLowerCase()) && filter !== "") {
      //display item if true
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//Image Slider

// create an array of images;
let images = [
  'image1.png', 'image2.png', 'image3.png','image4.png', 'image5.png'
]
let i = 0;

//first picture of canvas -> image1 mit index 0
let canvas = document.getElementById('canvas');
canvas.style.background = `url(./images/${images[0]})`

//add eventListeners to arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
  arrow.addEventListener('click', function(e){
              if (e.target.id === "left"){
          //reset i to 3 if i=-1 -> pic1 at i=0 -> button left -> pic 4 at i=3
          i--;
          if (i < 0){
              i = images.length -1;
          }
          canvas.style.background = `url(./images/${images[i]})`;
      } else if (e.target.id === "right") {
          i++;
          if (i >= images.length ){
              i = 0;
          }
          canvas.style.background = `url(./images/${images[i]})`;
      }
  })
});
