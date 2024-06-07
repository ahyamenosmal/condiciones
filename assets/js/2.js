let verificar = document.querySelector("#verificar");

verificar.addEventListener("click", () => {
  let input1 = parseInt(document.querySelector("#input1").value);
  let input2 = parseInt(document.querySelector("#input2").value);
  let input3 = parseInt(document.querySelector("#input3").value);

  let suma = input1 + input2 + input3;

  if (suma <= 10) {
    document.querySelector("h1").innerHTML = "Llevas " + suma + " stickers";
    document.querySelector("h2").innerHTML = "";
  } else {
    document.querySelector("h1").innerHTML = "Solo puedes llevar 10 stickers";
    document.querySelector("h2").innerHTML = "Llevas demasiados stickers";
  }
});
