let comprobar = document.querySelector("button");

comprobar.addEventListener("click", () => {
  let digito1 = document.querySelector("#digito1").value;
  let digito2 = document.querySelector("#digito2").value;
  let digito3 = document.querySelector("#digito3").value;

  if (digito1 === "9" && digito2 === "1" && digito3 === "1") {
    document.querySelector("p").innerHTML = "Password 1 correcta";
  } else if (digito1 === "7" && digito2 === "1" && digito3 === "4") {
    document.querySelector("p").innerHTML = "Password 2 correcta";
  } else {
    document.querySelector("p").innerHTML = "Password incorrecta";
  }
});
