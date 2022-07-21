// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
function getDogImage(e) {
  // 새로고침 방지

  e.preventDefault();

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      dogImageElem.src = data.message;
    });
}

const buttonElem = document.querySelector("#buttonSubmit");
const dogImageElem = document.querySelector("#dogImage");

buttonElem.addEventListener("click", getDogImage);
