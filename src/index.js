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
let backElemsArray = [...backElems];
const backImages = [...imagesArray, ...imagesArray];

backImages.forEach((image, count) => {
  let randomCard = Math.floor(Math.random() * backElemsArray.length);
  backElemsArray[randomCard].innerHTML = image;
  backElemsArray.splice(randomCard, 1);
});

function startGame() {
  let matchingArray = [];
  cards.forEach(card => {
    card.addEventListener("click", function(e) {
      e.target.parentElement.className += " flipped";
      if (matchingArray.length === 0) {
        matchingArray.push(e.target.nextElementSibling.innerHTML);
        console.log(matchingArray);
      } else {
        matchingArray.push(e.target.nextElementSibling.innerHTML);
        if (matchingArray[0] === matchingArray[1]) {
        }
      }
    });
  });
}

startGame();
