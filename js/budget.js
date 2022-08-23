document.getElementById('calculate-player-btn').addEventListener('click', function () {

    const playerCostElement = document.getElementById('player-input-field');
    const playerCostString = playerCostElement.value;
    const playerCost = parseFloat(playerCostString);
    playerCostElement.value = playerCost;

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);


    const totalPlayerExpenses = playerCost * 5;
    playerExpensesElement.innerText = playerExpenses;

    return totalPlayerExpenses;




    // console.log(totalPlayerExpenses)
})



document.getElementById('calculate-total').addEventListener('click', function () {
    // manager 
    const managerCostField = document.getElementById('manager-input');
    const managerCostString = managerCostField.value;
    const managerCost = parseFloat(managerCostString);

    managerCostField.value = managerCost;


    // coach 
    const coachCostField = document.getElementById('coach-input');
    const coachCostString = coachCostField.value;
    const coachCost = parseFloat(coachCostString);
    coachCostField.value = coachCost;

    // final total 
    const finalTotalElement = document.getElementById('final-total');
    const finalTotalString = finalTotalElement.innerText;
    const finalTotal = parseFloat(finalTotalString);

    const fianlExpenses = managerCost + coachCost + finalTotal;

    finalTotalElement.innerText = fianlExpenses;



})