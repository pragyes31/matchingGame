import "./styles.css";

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", function(e) {
    e.target.parentElement.classList.toggle("flipped");
  });
});
