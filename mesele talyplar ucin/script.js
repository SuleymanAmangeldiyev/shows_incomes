let adam = document.getElementById("adam");
let comp = document.getElementById("computer");

let chek = document.getElementById("start");
let reset = document.getElementById("reset");

let putting = document.getElementById("yeji");

chek.addEventListener("click", () => {
  putting.textContent = adam.value;
});
