const submit = document.getElementById("button");
const result = document.getElementById("result");
submit.addEventListener("click", () => {
  const number1 = Number(document.getElementById("number1").value);
  const operator = document.getElementById("operator").value;
  const number2 = Number(document.getElementById("number2").value);
  let answer = 0;
  if (operator == "+") {
    answer = number1 + number2;
  } else if (operator == "*") {
    answer = number1 * number2;
  } else if (operator == "/") {
    answer = number1 / number2;
  } else if (operator == "-") {
    answer = number1 - number2;
  }
  result.innerHTML = `Result: ${answer}`;
});
