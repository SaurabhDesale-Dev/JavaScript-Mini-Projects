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

debugger;
let a = 10;
let b = 20;
let c = a + b;

function area(a, v) {
  debugger;
  let ans = a * v;
  return ans;
}
console.log(c);
let areaFn = area(10, 20);
console.log(areaFn);
