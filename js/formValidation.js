/* Contact us chat form */

const form = document.querySelector("#chat_form");

const firstName = document.querySelector("#chat_name");
const firstNameError = document.querySelector("#nameError");

const surName = document.querySelector("#chat_surName");
const surNameError = document.querySelector("#surNameError");

const chatMessage = document.querySelector("#chat_message");
const chatMessageError = document.querySelector("#messageError");

function validateChatForm(event){
    event.preventDefault();    


    if(firstName.value.trim().length > 0){
        firstNameError.style.display = "none";
    }else{
        firstNameError.style.display = "block";
    }

    if(surName.value.trim().length > 0){
        surNameError.style.display = "none";
    }else{
        surNameError.style.display = "block";
    }

    if(chatMessage.value.trim().length > 0){
        chatMessageError.style.display = "none";
    }else{
        chatMessageError.style.display = "block";
    }

}
form.addEventListener("submit", validateChatForm);


/* Checkout us chat form */