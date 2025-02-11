let counter = 0
const count = document.getElementById("count");
const decrementCounter = document.getElementById('decrementCounter')
const formAuthorithation = document.getElementById('formAuthorithation')
const login = document.getElementById('login')
const password = document.getElementById('password')

function clearForm() {
  login.textContent = ''
  password.textContent = ''
}


function inc() {
  console.log('inc', counter++)
    update();
}

function dec() {
    console.log('dec', counter--)
    update();
}

decrementCounter.addEventListener("decrementCounterEvent", dec);

// formAuthorithation.addEventListener('')
function update() {
    count.textContent = counter;
}

// скрипт, который уведомит о полной загрузке страницы
window.onload = () => {
  console.log('Страница загружена')
  //document.write(`<h2>Загрузка окончена<\h2>`)
};

