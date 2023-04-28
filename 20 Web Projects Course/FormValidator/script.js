/* ----------------------------------------------------------------  */

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/* ----------------------------------------------------------------  */

function showError(pInput, pMessage)
{
    const formControl = pInput.parentElement;
    formControl.className = "form-control error";
    
    const small = formControl.querySelector("small");
    small.innerText = pMessage;
}

/* ----------------------------------------------------------------  */

function showSuccess(pInput)
{
    const formControl = pInput.parentElement;
    formControl.className = "form-control success";
}

/* ----------------------------------------------------------------  */

function isEmailValid(pEmail)
{
    const re = String(pEmail.value.trim())
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    console.log(re);

    if(re) {
        showSuccess(pEmail);
    }
    else {
        showError(pEmail, "Email is not valid");
    }
}

/* ----------------------------------------------------------------  */

function getFieldName(pInput)
{
    return pInput.id.charAt(0).toUpperCase() + pInput.id.slice(1);
}

/* ----------------------------------------------------------------  */

function checkRequiredFields(pInput)
{
   if(pInput.constructor === Array) {
        pInput.forEach(function(pItem) {
            if(pItem.value.trim() === "") {
                showError(pItem, `${getFieldName(pItem)} is required`);
            }
            else {
                showSuccess(pItem);
            }
        });
   }
}

/* ----------------------------------------------------------------  */

function checkLength(pInput, pMin, pMax)
{
    if(pInput.value.length < pMin) {
        showError(pInput, `${getFieldName(pInput)} must be at least ${pMin} characters`);
    }
    else if(pInput.value.length > pMax) {
        showError(pInput, `${getFieldName(pInput)} must be at less than ${pMax} characters`);
    }
    else {
        showSuccess(pInput);
    }
}

/* ----------------------------------------------------------------  */

function checkPasswordsMatch(pInput1, pInput2)
{
    if(pInput1.value !== pInput2.value) {
        showError(pInput2, "Passwords do not match");
    }
}

/* ---------- Event Listeners -------------------------------------  */

form.addEventListener("submit", function(pEvent) {
    pEvent.preventDefault();

    checkRequiredFields([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 50);
    isEmailValid(email);
    checkPasswordsMatch(password, password2);
});

/* ----------------------------------------------------------------  */
