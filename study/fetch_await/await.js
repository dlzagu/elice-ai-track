// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

async function getOlderUserList(e) {
  // 새로고침 방지
  e.preventDefault();

  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  const userList = data.message;
  console.log(userList);

  userListElem.src = userList;
}

const buttonElem = document.querySelector("#buttonSubmit");
const userListElem = document.querySelector("#dogImage");

buttonElem.addEventListener("click", getOlderUserList);
