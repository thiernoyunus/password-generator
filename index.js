const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let option1 = document.getElementById("option-1password")
let option2 = document.getElementById("option-2password")

function generatePassword() {
    newPasswordGen()
    for (let i = 1; i <= 15; i ++) {
        randomNum = Math.floor(Math.random() * characters.length)
        option1.textContent += characters[randomNum]
    }    
    for (let i = 1; i <= 15; i ++) {
        randomNum = Math.floor(Math.random() * characters.length)
        option2.textContent += characters[randomNum]
    }
    
}

function newPasswordGen() {
   option1.textContent = ""
   option2.textContent = ""
}