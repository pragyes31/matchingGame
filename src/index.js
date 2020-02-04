function buildMatchingGame() {
  const gameDiv = document.querySelector(".matching-game");
  const resetBtn = document.querySelector(".reset");
  const countDiv = document.querySelector(".count");
  const imagesArray = [
    `<i class="fab fa-twitter-square fa-3x"></i>`,
    `<i class="fab fa-facebook-square fa-3x"></i>`,
    `<i class="fab fa-linkedin fa-3x"></i>`,
    `<i class="fab fa-telegram fa-3x"></i>`,
    `<i class="fab fa-instagram fa-3x"></i>`,
    `<i class="fab fa-discord fa-3x"></i>`,
    `<i class="fab fa-snapchat-square fa-3x"></i>`,
    `<i class="fab fa-whatsapp-square fa-3x"></i>`
  ];
  const backImages = [...imagesArray, ...imagesArray];
  let count = 0;
  let matchingArray = [];
  let matchedArray = [];
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
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => {
        card.addEventListener("click", function(e) {
          if (!count) count++;
          countDiv.innerHTML = count;
          e.target.parentElement.className += " flipped";
          console.log(e.target.nextElementSibling);
          setTimeout(() => {
            matchingArray.push(e.target.nextElementSibling);
            if (
              matchingArray.length > 1 &&
              matchingArray[0].innerHTML === matchingArray[1].innerHTML
            ) {
              count++;
              matchedArray = [...matchedArray, ...matchingArray];
              matchingArray = [];
              if (matchedArray.length === 16) {
                count--;
                alert(`Woah! It took you only ${count} turns to win this :)`);
              }
            } else if (matchingArray.length > 1) {
              count++;
              matchingArray.forEach(elem => {
                elem.parentElement.classList.remove("flipped");
              });
              matchingArray = [];
            }
          }, 1000);
        });
      });
    },
    resetGame: e => {
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => {
        setTimeout(() => {
          card.classList.remove("flipped");
          countDiv.innerHTML = 0;
          count = 0;
          matchingArray = [];
          matchedArray = [];
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
