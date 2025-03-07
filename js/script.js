const user = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const errorText = document.querySelector('.error-text')
const clearBtn = document.querySelector('.clear')
const sendBtn = document.querySelector('.send')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup')


// POKAZYWANIE POPUP
const checkError = () =>{ 
  const allInputs = document.querySelectorAll('.form-box')

  let errorCount = 0 

  allInputs.forEach(el => { 
    if(el.classList.contains('error')) {
        errorCount++;
    }
  })

  if(errorCount === 0) {
    popup.classList.add('show-popup')
  }
 console.log(errorCount);
}


// SPRAWDZANIE POPRAWNOŚĆI EMAILA
const emailCheck = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  const  email1 = email.value.trim()
    if(emailRegex.test(email1)){
        clearError(email)
    } else {
        showError(email, 'E-mail jest nieprawidłowy')
    }

}
// SPRAWDZANIE DŁUGOŚCI NAZWY UŻYTKOWNIKA

const longCheck = (input, min) => {

             if( input.value.length < min ) {
                showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} składa się z min. ${min} znaków.`)
             } 

}
// SPRAWDZANIE ZGODNOŚĆI HASEŁ
const checkPassword = (pass1, pass2) => {
    if(pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują')
    }
}

// ERROR PODCZAS WYSYŁANIA FORMULARZA
const showError = (input, msg) =>{

    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.innerText = msg;
}
 
const clearError = input =>{

    const formBox = input.parentElement;
    formBox.classList.remove('error');
    const errorMsg = formBox.querySelector('.error-text');
    errorMsg.innerText = '';
}

const checkForm = input => {

input.forEach(el => {
    if(el.value === '') { 
        showError(el, el.placeholder)
    } else {
        clearError(el)
    }  
})
}

sendBtn.addEventListener('click', e =>{
    e.preventDefault()

    checkForm([user, pass, pass2, email]);
    longCheck(user, 3);
    longCheck(pass, 8);
    checkPassword(pass, pass2);
    emailCheck(email);

    checkError();
    

    
})

// CZYSZCZENIE FORMULARZA
clearBtn.addEventListener('click', e =>{
    e.preventDefault()

    const table  = [user, pass, pass2, email]
    
    table.forEach((element) => {
        element.value = ''
        clearError(element)
    });

})

