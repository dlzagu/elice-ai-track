const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

const getData = () => {
  axios.get("https://reqres.in/api/users").then((res) => {
    console.log(res);
  });
};

const sendData = () => {
  axios
    .post(
      "https://reqres.in/api/register",
      {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
