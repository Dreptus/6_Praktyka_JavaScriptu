const playGame = (playerInput) => {
	const getMoveName = (moveId) => {
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

	console.log(computerMove);

	// let playerInput = prompt('Wybierz swój ruch 1: Papier, 2: Kamień, 3: Nożyce');
	let playerMove = getMoveName(playerInput);
	const displayResult = (argComputerMove, argPlayerMove) => {
		printMessage(`Zagrałem ${argComputerMove}, a Ty ${argPlayerMove}`);
		if (argComputerMove == argPlayerMove){
			printMessage('Jest remis! - Powtórz grę!')
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

playGame(1)
