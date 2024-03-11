let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let result = document.getElementById('result');
let quote = document.getElementById('quote');

const add = () => {
  let sum = Number(num1.value) + Number(num2.value);
  result.innerHTML = `Result: ${sum}`;
  updateQuote(sum);
};

const subtract = () => {
  let sub = Number(num1.value) - Number(num2.value);
  result.innerHTML = `Result: ${sub}`;
  updateQuote(sub);
};

const multiply = () => {
  let mul = Number(num1.value) * Number(num2.value);
  result.innerHTML = `Result: ${mul}`;
  updateQuote(mul);
};

const divide = () => {
  let div = Number(num1.value) / Number(num2.value);
  result.innerHTML = `Result: ${div.toFixed(2)}`; // Limit decimal places to 2
  updateQuote(div);
};

const updateQuote = (result) => {
  if (isNaN(result)) {
    quote.innerHTML = 'Invalid input. Please enter valid numbers.';
  } else if (result < 0) {
    quote.innerHTML = 'Negativity is temporary. Stay positive!';
  } else if (result > 100) {
    quote.innerHTML = 'Success is the sum of small efforts repeated day in and day out.';
  } else {
    quote.innerHTML = 'Keep going! You are doing great!';
  }
};
