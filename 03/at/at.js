const link = document.querySelector("a");
// element 요소

link.setAttribute("href", "https://www.google.com");
link.innerHTML = "역시 검색은 구글";
console.log(link.getAttribute("href"));

const msg = document.querySelector("p");
// msg.setAttribute("class", "success");
// msg.setAttribute("style", "color:green");

msg.classList.remove("error");
msg.classList.add("success");
console.log(msg);
// get - set // read - write
