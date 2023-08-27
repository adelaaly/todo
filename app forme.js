const UserNameInput = document.getElementById("UserNameInput")
const UserPasswordInput = document.getElementById("UserPasswordInput")
const submitButton = document.getElementById("submitButton")
const try_again = document.getElementById("try_again")


submitButton.addEventListener("submit", function(event){
    event.preventDefault();

    const username = UserNameInput.value
    const password = UserPasswordInput.value
    if( username == "ali" && password == "0000"){
        try_again.style.color = "green";
        window.location.href = "index_toDo.html";
    } else{
        try_again.textContent = "الإسم أو الرقم السري غير صحيح، حاول من جديد"
        try_again.classList.add('try_again');
       
        submitButton.reset();
    }
})