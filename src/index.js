import "./styles.css";

const cards = document.querySelectorAll(".card");
const backElems = document.querySelectorAll(".back");
console.log(backElems);
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
  console.log(count);
});

cards.forEach(card => {
  card.addEventListener("click", function(e) {
    e.target.parentElement.classList.toggle("flipped");
  });
});
