const button = document.querySelector(".btn");
let number = 0;
button.addEventListener("click", () => {
  debugger;
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let factPara = document.createElement("p");
      let fact = data.fact;

      factPara.innerHTML = `${number} . ${fact}`;
      document.body.appendChild(factPara);
    })
    .catch();
  number++;
});
