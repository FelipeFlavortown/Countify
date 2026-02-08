let result = document.querySelector(".result");
let camp = document.querySelector(".camp");

function contarPalavras() {
  let text = camp.value;
  let words = text.trim().split(/\s+/);

  let wordNumber = words[0] === "" ? 0 : words.length;

  result.innerHTML = `The word number is ${wordNumber}`;
}

function cleanText() {
  camp.value = "";
  result.innerHTML = "O número de palavras é: 0";
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  let themeIcon = document.querySelector(".theme-btn i");

  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

camp.addEventListener("input", contarPalavras);