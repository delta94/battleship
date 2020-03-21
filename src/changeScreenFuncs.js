function hideStartScreen() {
    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');
}

function showMainScreen() {
    const mainScreen = document.querySelector('.main-screen');
    mainScreen.style.display = 'flex';
}

function openShipPlacements() {
    const containerTwo = document.querySelector('.boards div#container-two.container');
    containerTwo.style.display = 'none';
}

function startGame() {
    const startGameBtn = document.querySelector('button.start-game');

    startGameBtn.addEventListener('click', e => {
        e.preventDefault();
        showComputerBoard();
    });
    startGameBtn.style.backgroundColor = '#087e8b';
    startGameBtn.style.color = 'white';
    startGameBtn.style.transform = 'scale(1.1)';
}

function showComputerBoard() {
    const containerTwo = document.querySelector('.boards div#container-two.container');
    const formContainer = document.querySelector('#form-container');
    const sunkShipsDivs = document.querySelectorAll('.sunk-ships');

    containerTwo.style.display = 'flex';
    formContainer.style.display = 'none';
    sunkShipsDivs.forEach(div => (div.style.display = 'flex'));
}

function startTwoPlayers() {}

function switchGameboards() {
    const gameboardOne = document.querySelector('#container-one');
    gameboardOne.style.display = 'none';

    const gameboardTwo = document.querySelector('#container-two');
    gameboardTwo.style.display = 'flex';

    document.querySelector('#player-two-name').textContent = 'Captain Hack Finch';
}

function openCoverBlanket() {
    const blanket = document.querySelector('.cover-blanket');
    blanket.classList.add('active');
    document.querySelector('.main-screen').style.display = 'none';

    const passDeviceBtn = document.querySelector('.pass-device-btn');
    passDeviceBtn.addEventListener('click', switchGameboards);
}

export {
    hideStartScreen,
    showMainScreen,
    openShipPlacements,
    startGame,
    switchGameboards,
    openCoverBlanket,
};
