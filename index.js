const quote = document.getElementById("quote");
const advice = document.getElementById("advice");

const getRadomAdviceData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
advice.innerHTML = getRadomAdviceData()




// advice.innerHTML = getRadomAdviceData;
