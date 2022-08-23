document.getElementById('calculate-player-btn').addEventListener('click', function () {

    const playerCostElement = document.getElementById('player-input-field');
    const playerCostString = playerCostElement.value;
    const playerCost = parseFloat(playerCostString);
    const totalPlayerCost = playerCost * 5;
    playerCostElement.value = totalPlayerCost;

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);
    playerExpensesElement.innerText = playerExpenses;

    const totalPlayerExpenses = playerCost




    // console.log(playerInput)
})