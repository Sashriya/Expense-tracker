const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

let total = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  total += parseFloat(amount);
  totalAmount.textContent = total.toFixed(2);

  const listItem = document.createElement("li");
  listItem.textContent = `Rs.${amount} for ${description}`;
  expenseList.appendChild(listItem);
  listItem.addEventListener("click", function () {
    total -= parseFloat(amount);
    totalAmount.textContent = total.toFixed(2);
    expenseList.removeChild(listItem);
  });

  form.reset();
});
