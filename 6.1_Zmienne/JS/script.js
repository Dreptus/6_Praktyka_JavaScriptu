const playGame = playerInput => {
  const getMoveName = moveId => {
    if (moveId == 1) {
      return 'Kamień';
    } else if (moveId == 2) {
      return 'Papier';
    } else if (moveId == 3) {
      return 'Nożyce';
    } else {
      printMessage(`Nie znam ruchu o id ${moveId}`);
      return `Nieznany ruch`;
    }
  };
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);

  let playerMove = getMoveName(playerInput);
  const displayResult = (argComputerMove, argPlayerMove) => {
    printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
    if (argComputerMove == argPlayerMove) {
      printMessage('Jest remis! - Powtórz grę!');
    } else if (
      (argComputerMove == 'Kamień' && argPlayerMove == 'Nożyce') ||
      (argComputerMove == 'Nożyce' && argPlayerMove == 'Papier') ||
      (argComputerMove == 'Papier' && argPlayerMove == 'Kamień')
    ) {
      printMessage('Ty Przegrałeś - Wygrał Komputer');
    } else {
      printMessage('Ty Wygrałeś - Przegrał Komputer!');
    }
  };
  displayResult(computerMove, playerMove);
};

btnOne = document.querySelector('.btn-one').addEventListener('click', () => {
  playGame(1);
});
btnTwo = document.querySelector('.btn-two').addEventListener('click', () => {
  playGame(2);
});
btnThree = document.querySelector('.btn-three').addEventListener('click', () => {
  playGame(3);
});

btnReset = document.querySelector('.btn-reset').addEventListener('click',() => {
	window.location.reload()});