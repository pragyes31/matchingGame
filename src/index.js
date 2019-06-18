import "./styles.css";

const cards = document.querySelectorAll(".card");
const backElems = document.querySelectorAll(".back");

const imagesArray = [
  `<i class="fab fa-twitter-square"></i>`,
  `<i class="fab fa-facebook-square"></i>`,
  `<i class="fab fa-linkedin"></i>`,
  `<i class="fab fa-telegram"></i>`,
  `<i class="fab fa-instagram"></i>`,
  `<i class="fab fa-discord"></i>`,
  `<i class="fab fa-snapchat-square"></i>`,
  `<i class="fab fa-whatsapp-square"></i>`
];
let backElemsArray = Array.from(backElems);
//console.log(backElemsArray)
const backImages = [...imagesArray, ...imagesArray];

backImages.forEach(image => {
  let randomCard = Math.floor(Math.random() * backElemsArray.length);
  backElemsArray[randomCard].innerHTML = image;
  backElemsArray.splice(randomCard, 1);
});

function startGame() {
  let matchingArray = [];
  let matchedArray = [];
  cards.forEach(card => {
    card.addEventListener("click", function(e) {
      e.target.parentElement.className += " flipped";
      setTimeout(() => {
        matchingArray.push(e.target.nextElementSibling);
        if (matchingArray.length === 2) {
          if (matchingArray[0].innerHTML === matchingArray[1].innerHTML) {
            matchedArray = [...matchedArray, ...matchingArray];
            matchingArray = [];
            if (matchedArray.length === 16) {
              alert("you won!");
            }
          } else {
            matchingArray.forEach(elem => {
              elem.parentElement.classList.remove("flipped");
            });
            matchingArray = [];
          }
        }
      }, 1000);
    });
  });
}

startGame();
