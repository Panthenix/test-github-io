const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesList = document.getElementById('messages');

sendButton.addEventListener('click', () => {
 const message = messageInput.value.trim();
 if (message !== '') {
 const messageElement = document.createElement('LI');
 messageElement.textContent = message;
 messagesList.appendChild(messageElement);
 messageInput.value = '';
 }
});
