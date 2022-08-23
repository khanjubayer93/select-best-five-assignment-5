// function displayPlayer(addPlayer) {
//     // const playerList = document.getElementById('players-list')

// }

const playerArray = [];

function display(cartPlayer) {
    const tableBody = document.getElementById('player-table');
    tableBody.innerHTML = "";

    for (let i = 0; i <= 4; i++) {
        // console.log(cartPlayer[i].playersName);

        const name = cartPlayer[i].playersName;

        const tr = document.createElement("tr")

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>`;
        tableBody.appendChild(tr);
    }
}

function addPlayer(element) {

    const playersName = element.parentNode.children[0].innerText;

    const playerObj = {
        playersName: playersName,
    }


    playerArray.push(playerObj);
    // console.log(playerArray.length)

    document.getElementById('player-count').innerText = playerArray.length;

    display(playerArray)
}

