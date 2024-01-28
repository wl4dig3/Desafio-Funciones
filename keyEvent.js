document.addEventListener("keydown", (e) => {
  let letra = e.key;
  let div1 = document.querySelector("#ele");
  console.log(letra);
  const container = document.querySelector("body");
  let div = document.createElement("div");

  if (letra === "a") {
    div1.style.backgroundColor = "#ff0080";
  } else if (e.key === "s") {
    div1.style.backgroundColor = "orange";
  } else if (letra === "d") {
    div1.style.backgroundColor = "#80DAEB";
  } else if (letra === "q") {
    const container = document.querySelector("body");
    let div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border = "1px solid";
    div.style.backgroundColor = "#A18262";
    container.appendChild(div);
  } else if (letra === "w") {
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border = "1px solid";
    div.style.backgroundColor = "#572364";
    container.appendChild(div);
  }
  else if (letra === "e") {
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.border = "1px solid";
    div.style.backgroundColor = "gray";
    container.appendChild(div);
  }
});
