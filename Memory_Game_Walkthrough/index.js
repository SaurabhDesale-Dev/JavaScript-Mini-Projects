const cards = document.querySelectorAll(".card");
console.log(cards);

let isFlipped = false;
let firstCard;
let secondCard;

cards.forEach((card) => {
  card.addEventListener("click", flip);
});
function flip() {
  this.classList.add("flip");
  if (isFlipped === false) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checking();
  }
}

const checking = () => {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
};
const success = () => {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
};

const fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);

  // reset();
};

const reset = () => {
  [isFlipped, firstCard, secondCard] = [false, null, null];
};

const shuffle = () => {
  cards.forEach((card) => {
    let index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
};
shuffle();
