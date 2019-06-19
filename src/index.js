import "./styles.css";

function buildMatchingGame() {
  const gameDiv = document.querySelector(".matching-game");
  const resetBtn = document.querySelector(".reset");
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
  const backImages = [...imagesArray, ...imagesArray];
  const matchingGame = {
    createBox: () => {
      const matchBox = document.createElement("section");
      const cardDiv = document.createElement("div");
      const front = document.createElement("div");
      const back = document.createElement("div");

      matchBox.classList.add("match-box");
      cardDiv.classList.add("card");
      front.classList.add("front");
      back.classList.add("back");

      gameDiv.appendChild(matchBox);
      matchBox.appendChild(cardDiv);
      cardDiv.appendChild(front);
      cardDiv.appendChild(back);
    },
    populateBoxes: () => {
      for (let i = 0; i < 16; i++) {
        matchingGame.createBox();
      }
    },
    addImages: () => {
      const backElems = document.querySelectorAll(".back");
      let backElemsArray = Array.from(backElems);
      backImages.forEach(image => {
        let randomCard = Math.floor(Math.random() * backElemsArray.length);
        backElemsArray[randomCard].innerHTML = image;
        backElemsArray.splice(randomCard, 1);
      });
    },
    startGame: () => {
      let matchingArray = [];
      let matchedArray = [];
      const cards = document.querySelectorAll(".card");
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
    },
    resetGame: e => {
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => {
        //console.log(card.parentElement.classList)
        setTimeout(() => {
          card.classList.remove("flipped");
        }, 500);
      });
    }
  };
  matchingGame.populateBoxes();
  matchingGame.addImages();
  matchingGame.startGame();
  resetBtn.addEventListener("click", matchingGame.resetGame);
}

const matchingGame = new buildMatchingGame();
