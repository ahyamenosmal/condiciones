let img = document.querySelector("img");
let borde = false;

img.addEventListener("click", () => {
  if (borde == false) {
    document.querySelector("img").style.border = "solid 2px red";
    borde = true;
  } else {
    document.querySelector("img").style.border = "";
    borde = false;
  }
});
