const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

// 하나의 함수고 두가지 기능을 할 수 있게끔

// 전송하는 방식, Http 통센이 있어서,
// Get,Post,Delete
//헤더는 우리가 어떤 통신을 할 건데, 이 때 이런 타입으로 진행할 거야. 하는 사전 정보같은 것을 담는 것입니다. 보통 이런 것을 Protocol 이라고 합니다.
const sendHttpResquest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((response) => {
    if (response.status >= 400) {
      return response.json().then((err) => {
        const error = new Error("Network Error");
        error.data = err;
        throw error;
      });
    }
    return response.json();
  });
};

const getData = () => {
  sendHttpResquest("GET", "https://reqres.in/api/users").then((result) => {
    console.log(result);
  });
};

const sendData = () => {
  sendHttpResquest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
