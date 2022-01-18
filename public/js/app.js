const wether = document.querySelector("form");
const f;
const search = document.querySelector("input");
const message = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");
message.textContent = "loding...";
message2.textContent = "";

wether.addEventListener("submit", (e) => {
  const location = search.value;
  e.preventDefault();
  fetch(`/weather?address=${location}`).then((e) => {
    e.json().then((s) => {
      if (s.error) {
        console.log(s.error);
      }
      message.textContent = s.location;
      message2.textContent = s.forecast;
    });
  });
});
