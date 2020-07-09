const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');


const displayError = (inputField, errorMessage)=>{
    inputField.classList.add('wrong');

    const field = inputField.parentElement;
    const icon = field.querySelector('.fa');
    const message = field.querySelector('.error');

    icon.classList.add('wrong');
    message.textContent = errorMessage;
    message.classList.add('wrong');
}

const successfulEntry = inputField=>{
    inputField.classList.remove('wrong');
    const field = inputField.parentElement;
    const icon = field.querySelector('.fa');
    const message = field.querySelector('.error');

    icon.classList.remove('wrong');
    message.classList.remove('wrong');
}

const cannotSubmit = ()=>{
    (firstName.classList.contains('wrong') || lastName.classList.contains('wrong') || 
    email.classList.contains('wrong') || password.classList.contains('wrong'))? true:false;
}


const checkFormInputs = ()=>{
    if(firstName.value == ''){
        displayError(firstName, "First Name cannot be empty");
    } else{
        successfulEntry(firstName);
    }
    if(lastName.value == ''){
        displayError(lastName, "Last Name cannot be empty");
    } else{
        successfulEntry(lastName);
    }
    if(email.value == ''){
        displayError(email, "Email address cannot be empty");
    } else if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/.test(email.value)){
        displayError(email, "Looks like this is not an email")
    } else{
        successfulEntry(email);
    }
    if(password.value == ''){
        displayError(password, "Password cannot be empty");
    }else{
        successfulEntry(password);
    }
}

submit.addEventListener('click', (e)=>{
    checkFormInputs();
    if(!cannotSubmit()){
        e.preventDefault();
    }
})