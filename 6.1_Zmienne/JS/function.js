const printMessage = (msg) => {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.querySelector('#messages').append(div);
};

const clearMessages = () => {
	document.querySelector('#messages').innerHTML = '';
};
