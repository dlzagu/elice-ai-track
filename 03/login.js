const form = document.querySelector(".login-form");
const feedback = document.querySelector(".feedback");

const regexp = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.username.value);
  const username = form.username.value;
});

form.username.addEventListener("keyup", (e) => {
  if (regexp.test(e.target.value)) {
    feedback.textContent = "환영합니다 여러분.";
  } else {
    feedback.textContent = "영문 6~12자로 적어주셔야 합니다.";
  }
});
