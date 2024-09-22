const section = document.getElementById("section");
const colorBox = document.getElementById("clr-box");
const colorCode = document.getElementById("color-code");

document.getElementById("generate-btn").addEventListener("click", function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newColor = `rgb(${r}, ${g}, ${b})`;
  colorCode.innerText = newColor;
  colorBox.style.backgroundColor = newColor;
});

document.getElementById("copy-code").addEventListener("click", function () {
  const inputTag = document.createElement("input");
  section.appendChild(inputTag);
  inputTag.value = colorCode.innerText;

  inputTag.select();
  document.execCommand("copy");

  section.removeChild(inputTag);
  if (inputTag.value !== "") {
    return alert("your code is copied");
  } else {
    return alert("generate code first");
  }
});
