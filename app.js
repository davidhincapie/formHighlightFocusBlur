const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


const focusHandler = event => {
  event.target.className = 'highlight';
};
const blurHandler = event => {
  event.target.className = '';
};

//adding event listener to the arrow function
nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler);