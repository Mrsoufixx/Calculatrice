let nombre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operator = ["+", "-", "*", "/"];
let selected_operator = null;
let a = ""
let b = ""
let calculator = document.querySelector("#root");
//result.style.flex= "column"
let result = document.createElement("div");
result.style.height = "30px";
result.innerHTML = 0;
calculator.appendChild(result);
nombre.map((nb) => {
  let nombre_btn = document.createElement("button");
  calculator.appendChild(nombre_btn);
  nombre_btn.innerHTML = nb;
  nombre_btn.addEventListener("click", () => {
    if (!selected_operator) {
      a += nombre_btn.textContent.toString();
      
    } else {
      b += nombre_btn.textContent.toString();
    }
    console.log(a,b)
  });
});
operator.map((oper) => {
  let operator_btn = document.createElement("button");
  calculator.appendChild(operator_btn);
  operator_btn.innerHTML = oper;
  operator_btn.addEventListener("click", () => {
    selected_operator = operator_btn.innerHTML;
  });
});
