const getJson = (resourse, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if ((request.readyState === 4) & (request.status === 200)) {
        const data = JSON.parse(request.responseText);
        // callback(undefined, request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // callback("데이터를 받아 올 수 없습니다", undefined);
        reject("실패");
      }
    });

    request.open("GET", resourse);
    request.send();
  });
};

getJson("json/jammanbo.json")
  .then((result) => {
    console.log(`promise 1 : ` + result);
    return getJson("json/pikachu.json");
  })
  .then((result) => {
    console.log(`promise 2 : ` + result);
    return getJson("json/muslemon.json");
  })
  .then((result) => {
    console.log(`promise 3 : ` + result);
  })
  .catch((err) => {
    console.log("rejected" + err);
  });

//callback지옥
// getJson("json/jammanbo.json", (err, data) => {
//   console.log(data);
//   getJson("json/muslemon.json", (err, data) => {
//     console.log(data);
//     getJson("json/pickachu.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });
