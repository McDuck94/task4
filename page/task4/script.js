const mail = document.querySelector('#mail');

mail.addEventListener('click', (event) => {
    const myText = prompt('Введите сообщение');
    mail.textContent = myText;
    event.preventDefault();
}) 