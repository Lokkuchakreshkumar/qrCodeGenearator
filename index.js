let input = document.querySelector("input");
const btn = document.querySelector("button");
let id = document.getElementById("img");
let qr = new QRCode(id, {
  colorDark: "#00FFCC",
  colorLight: "#222222",
});
btn.addEventListener("click", (event) => {
  event.preventDefault();
  qr.makeCode(input.value);
});
