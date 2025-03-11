// counter 
let counter = 0
const count = document.getElementById("count");
const decrementCounter = document.getElementById('decrementCounter')

function inc() {
  console.log('inc', counter++)
    update();
}

function dec() {
    console.log('dec', counter--)
    update();
}

function update() {
  count.textContent = counter;
}

decrementCounter.addEventListener("click", dec);


// form

const loginForm = document.getElementById('loginForm')
const loginInput = document.getElementById('login')
const passwordInput = document.getElementById('password')
const message = document.getElementById('message')


function clearForm() {
  login.textContent = ''
  password.textContent = ''
  console.log('clear form')
}

loginForm.addEventListener('submit', function(event) {
  event.preventDefault() // отмена стандартного поведения браузера


  const login = event.target[0].value
  const password = event.target[1].value

  if (login === 'admin' && password === 'admin')
  {
    message.textContent = 'Вход выполнен!'

    try {
      localStorage.setItem('login', login)
      localStorage.setItem('password', password)
    
    } catch (error) {
      if (error === QUOTA_EXCEEDED_ERR)
      {
        alert('Превышен лимит локального хранилища');
      }
    }
    } else {
    message.textContent = 'Вход не выполнен'
  }
}
)

// when the page is loaded
window.onload = () => {
  console.log('Страница загружена')

  const savedLogin = localStorage.getItem('login')
  const savedPassword = localStorage.getItem('password')

  if (savedLogin && savedPassword)
  {
    loginInput.value = savedLogin
    passwordInput.value = savedPassword
  }
};



