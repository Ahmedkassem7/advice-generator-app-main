const advice_text = document.getElementById("advice-text");
const btn_click = document.getElementById("btn");
const advice_id = document.getElementById("advice-id");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.slip);
      showAdvice(data.slip);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function showAdvice(advice) {
  advice_id.innerHTML = `ADVICE ${advice.id}`;
  advice_text.innerHTML = `"${advice.advice}"`;
}
fetchAdvice();
btn_click.addEventListener("click", fetchAdvice);
