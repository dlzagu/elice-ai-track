const getPoketmons = async () => {
  const response = await fetch("json/pikaㅇchu.json");
  console.log(response);

  if (response.status !== 200) {
    throw new Error("통신 주소값을 찾을 수 없습니다.");
  }

  const data = await response.json();
  return data;
};

getPoketmons()
  .then((data) => console.log("resolve :", data))
  .catch((err) => console.log("rejected :", err));

console.log(3);

// const test = getPoketmons();
// console.log(test);
