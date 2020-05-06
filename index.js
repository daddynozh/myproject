/*const myButton = document.getElementById('contacts-btn');

const myButtonListener = () => {

  let div = document.createElement('div');
  div.innerHTML = "какой-то текст";

  document.body.appendChild(div);

};

myButton.addEventListener('click', myButtonListener);*/
var list = document.getElementById('kek'),
  newdiv = document.createElement('div');
    newdiv.className = 'button';
	newdiv.style.color = 'black';
    newdiv.innerHTML = "Вверх";
list.appendChild(newdiv);
