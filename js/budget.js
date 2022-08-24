let ExpensesPlayer = 0;

document
  .getElementById("calculate-player-btn")
  .addEventListener("click", function () {
    const playerCostElement = document.getElementById("player-input-field");
    const playerCostString = playerCostElement.value;
    const playerCost = parseFloat(playerCostString);
    playerCostElement.value = playerCost;

    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);
    console.log(playerExpenses);

    const totalPlayerExpenses = playerCost + playerExpenses;
    const totalExpenses = totalPlayerExpenses * 5;
    playerExpensesElement.innerText = totalExpenses;

    const ExpensesPlayer = totalExpenses;
    console.log(totalExpenses);
  });

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    // manager
    const managerCostField = document.getElementById("manager-input");
    const managerCostString = managerCostField.value;
    const managerCost = parseFloat(managerCostString);

    managerCostField.value = managerCost;

    // coach
    const coachCostField = document.getElementById("coach-input");
    const coachCostString = coachCostField.value;
    const coachCost = parseFloat(coachCostString);
    coachCostField.value = coachCost;

    const totalPlayerCost = parseInt(
      document.getElementById("player-expenses").innerText
    );
    console.log("Player cost: " + totalPlayerCost);

    // final total
    const finalTotalElement = document.getElementById("final-total");
    const finalTotalString = finalTotalElement.innerText;
    const finalTotal = parseFloat(finalTotalString);

    const fianlExpenses = totalPlayerCost + managerCost + coachCost;

    finalTotalElement.innerText = fianlExpenses;
  });
