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

backImages.forEach((image, count) => {
  let randomCard = Math.floor(Math.random() * backElemsArray.length);
  backElemsArray[randomCard].innerHTML = image;
  backElemsArray.splice(randomCard, 1);
});

function startGame() {
  let matchingArray = [];
  let count = 0;
  cards.forEach(card => {
    card.addEventListener("click", function(e) {
      e.target.parentElement.className += " flipped";
      //console.log(e.target.parentElement)
      matchingArray.push(e.target.nextElementSibling);
      if (matchingArray.length > 1) {
        if (matchingArray[0].innerHTML === matchingArray[1].innerHTML) {
          count += 2;
          //console.log("boom");
          if (count === 16) {
            alert("you won!");
          }
        } else if (matchingArray[0].innerHTML !== matchingArray[1].innerHTML) {
          console.log("boom");
          matchingArray.forEach(elem => {
            console.log(elem.parentElement.classList);
            elem.parentElement.classList.remove("flipped");
          });
          matchingArray = [];
        }
      }
    });
  });
}

startGame();
