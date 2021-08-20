// TASK:
// Complete 1. Clicking the edit button will change user name to a text entry box
// Complete 2. Clicking either accept or deny button will remove user from connection requests list

// Bonus: either button deccreases the connection requests number
// Bonus: accept button increases "Your Connections" Number - not applicable for me

// Task 1. 
var userName = document.querySelector(".user-name");
function editProfile(){
    userName.innerText = "John Cena";
}

// Task 2. 
function removeUser(elem){
    elem.parentNode.remove(elem);
}