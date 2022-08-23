const cform = document.querySelector("#checkout_form");

const cFirstName = document.querySelector("#checkoutName");
const cFirstNameError = document.querySelector("#checkoutNameError");
const cSurName = document.querySelector("#checkoutSurName");
const cSurNameError = document.querySelector("#checkoutSurNameError");
const checkoutEmail = document.querySelector("#checkoutEmail");
const checkoutEmailError = document.querySelector("#checkoutEmailError");
const checkoutPhone = document.querySelector("#checkoutPhone");
const checkoutPhoneError = document.querySelector("#checkoutPhoneError");

const checkoutCardName = document.querySelector("#cardName");
const checkoutCardNameError = document.querySelector("#cardNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const expDate = document.querySelector("#expDate");
const expDateError = document.querySelector("#expDateError");
const CVCNumber = document.querySelector("#cvc");
const CVCNumberError = document.querySelector("#cvcError");


function validateCheckoutForm(event){
    event.preventDefault();
    
    let isValid = true;

    if(cFirstName.value.trim().length > 0){
        cFirstNameError.style.display = "none";
    }else{
        cFirstNameError.style.display = "block";
        isValid = false;
    }

    if(cSurName.value.trim().length > 0){
        cSurNameError.style.display = "none";
    }else{
        cSurNameError.style.display = "block";
        isValid = false;
    }

    if(validateEmail(checkoutEmail.value) === true){
        checkoutEmailError.style.display = "none";
    }else{
        checkoutEmailError.style.display = "block";
        isValid = false;
    }

    if(validatePhone(checkoutPhone.value) === true){
        checkoutPhoneError.style.display = "none";
    }else{
        checkoutPhoneError.style.display = "block";
        isValid = false;
    }

    if(checkoutCardName.value.trim().length > 0){
        checkoutCardNameError.style.display = "none";
    }else{
        checkoutCardNameError.style.display = "block";
        isValid = false;
    }

    if(validateCardNumber(cardNumber.value) === true){
        cardNumberError.style.display = "none";
    }else{
        cardNumberError.style.display = "block";
        isValid = false;
    }

    if(validateExpDate(expDate.value) === true){
        expDateError.style.display = "none";
    }else{
        expDateError.style.display = "block";
        isValid = false;
    }

    if(CVC(CVCNumber.value) === true){
        CVCNumberError.style.display = "none";
    }else{
        CVCNumberError.style.display = "block";
        isValid = false;
    }

    if (isValid){
        window.location.href=`checkout_success.html`;
    }
};

cform.addEventListener("submit", validateCheckoutForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};
function validatePhone(phone) {
    const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const patternMatches = regEx.test(phone);
    return patternMatches;
};
function validateCardNumber(cardNumber) {
    const regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const patternMatches = regEx.test(cardNumber);
    return patternMatches;
};
function validateExpDate(exp) {
    const regEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const patternMatches = regEx.test(exp);
    return patternMatches;
};
function CVC(cvc) {
    const regEx = /^[0-9]{3,4}$/;
    const patternMatches = regEx.test(cvc);
    return patternMatches;
};