const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
    ")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".",
    "?","/"
];

function passwords() {
    let pwd1 = document.getElementById('pwd1');
    pwd1.textContent = generatePassword();
    pwd1.style.cursor = 'pointer';
    let pwd2 = document.getElementById('pwd2');
    pwd2.textContent = generatePassword();
    pwd2.style.cursor = 'pointer';
    let cpyEl = document.getElementById('cpy-el');
    cpyEl.textContent = null;
}

function generatePassword() {
    let password = '';
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random()*characters.length)];
    }
    return password;
}

function cpy(btn) {
    navigator.clipboard.writeText(document.getElementById(btn).textContent);
    let cpyEl = document.getElementById('cpy-el');
    cpyEl.textContent = 'Copied to clipboard!';
}
