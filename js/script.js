//This is a credit card Validation
const creditCardNumber = document.querySelector('.creditCard');
const buttonConfirm = document.querySelector('.confirmPayment');

buttonConfirm.addEventListener('click', function () {
    let cardNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (creditCardNumber.value.match(cardNumber)) {
        creditCardNumber.style.border = '1px solid green';
        return true;
    } else {
        creditCardNumber.style.border = '1px solid red';
        return false;
    }
});

//This is a full name validation
const fullName = document.querySelector('.fullName');
buttonConfirm.addEventListener('click', function () {
    let fullNameValidation = /^[A-Za-z\s]+$/;
    if (fullName.value.match(fullNameValidation)) {
        fullName.style.border = '1px solid green';
        return true;
    } else {
        fullName.style.border = '1px solid red';
        return false;
    }
});

//This is a expiration date validation
const expiry = document.querySelector('.expiry');
buttonConfirm.addEventListener('click', function () {
    let dateOfExpiration =  /[^\d\/]|^[\/0-9]*$/;
    if (expiry.value.match(dateOfExpiration) && expiry.value != "") {
        expiry.style.border = '1px solid green';
        return true;
    } else {
        expiry.style.border = '1px solid red';
        return false;
    }
});

//This is a cvv validation
const cvvNumber = document.querySelector('.cvv');
buttonConfirm.addEventListener('click', function () {
    let cvvValidation = new RegExp('^[0-9]+$');
    if (cvvNumber.value.match(cvvValidation) && cvvNumber.value.length <= 3) {
        cvvNumber.style.border = '1px solid green';
        return true;
        } else {
            cvvNumber.style.border = '1px solid red';
            return false;
        }
});


//This is zip code validation
const zipCodeNumber = document.querySelector('.zipCode');
buttonConfirm.addEventListener('click', function () {
    let zipCodeValidation = new RegExp('^[0-9]+$');
    if (zipCodeNumber.value.match(zipCodeValidation)) {
        zipCodeNumber.style.border = '1px solid green';
        return true;
    } else {
        zipCodeNumber.style.border = '1px solid red';
        return false;
    }
});


function enableSubmit() {
    let inputs = document.querySelector('.creditCard');
    let btn = document.querySelector('.confirmPayment');
    let isValid = true;

    for(let i = 0; i < inputs.length; i++) {
        let changedInput = inputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null) {
            isValid = false;
            break;
        }
    }
    btn.disabled = !isValid;
}

enableSubmit();