const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var pw1 
var pw2
let pw1form = document.querySelector("#pwarea1")
let pw2form = document.querySelector("#pwarea2")


function rng(){
    var value = Math.floor(Math.random()*characters.length)
    return value
}

function generatepw(){
    let pwlen =  document.querySelector(".pwlength").value
    let specialchr = document.querySelector("#specialchars").checked
    pw1 =""
    pw2 =""
    

   if (pwlen.length != 0){
        pwlen = Number(pwlen)
   } else {
        pwlen = 8
   }
   
   for (var i = 0; i < pwlen; i++){
        var indexselector = rng()
        if (specialchr == false){
            if (indexselector >= 62){
                indexselector = Math.floor(Math.random()*61+1) 
            }
        }
        pw1 += characters[indexselector]
        pw2 += characters[indexselector+1]
   }
   pw1form.textContent = pw1
   pw2form.textContent = pw2

}
function copytocp(){
    var password1 = document.getElementById("pwarea1").textContent
    var password2 = document.getElementById("pwarea2").textContent

    if (password1 === "1st Password" && password2 === "2nd Password"){
        alert("Password not yet set. Press Generate Password to continue.")
    } else {
        navigator.clipboard.writeText(password1);
        navigator.clipboard.writeText(password2);
        alert("Password Copied to Clipboard.")
    }
    
}