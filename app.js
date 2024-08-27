let box = document.querySelector(".box");
const colors = [
  "#2db911",
  "#df980b",
  "#04a4f4",
  "#04f4a8",
  "#1932f3",
  "#bd0049",
];
const direction = ["front", "back", "left", "right", "top", "bottom"];

for (var i of direction) {
  let direc = document.createElement("div");
  box.appendChild(direc);
  direc.classList.add(i);
  direc.setAttribute(`style`, `--clr:${colors[direction.indexOf(i)]}`);
  for (let j = 0; j < 9; j++) {
    let span = document.createElement("span");
    direc.appendChild(span);
    let name = "TECUSTAAD";
    if (i === "bottom") {
      let namecharecter = name.split("");
      span.innerHTML = namecharecter[j];
      span.classList.add("nameLatter");
    }
  }

  direc
    .querySelector("span")
    .setAttribute(`style`, `--clr:${colors[direction.indexOf(i)]}`);
}
var isKeyDown = false;
rotadeCube(-305, 100);
document.documentElement.addEventListener("mousedown", function (e) {
  isKeyDown = true;
  rotadeCube(e.clientX, e.clientY);
});
document.documentElement.addEventListener("mouseup", function (e) {
  isKeyDown = false;
  rotadeCube(-305, 100);
});
document.documentElement.addEventListener("mousemove", function (e) {
  isKeyDown && rotadeCube(e.clientX, e.clientY);
});
function rotadeCube(x, y) {
  console.log(x, y);
  let Xvalue = Math.floor(x / 2) + 100;
  let Yvalue = Math.floor(y / 2) + 100;
  box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`;
}
