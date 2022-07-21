const quote = document.getElementById("quote");
const advice = document.getElementById("adviceId");
const next = document.getElementById("next");

const getRadomAdviceData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      advice.innerHTML = "Quote no. " + data.slip.id + " : ";
      quote.innerHTML = data.slip.advice;
    });
};
// make page reload when button is clicked
next.addEventListener("click", getNext);

function getNext() {
  console.log("Next");
  // window.location.reload();
  getRadomAdviceData();
}

