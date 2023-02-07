function bodyLoad() {

    let passGenBtn = document.getElementById("generatePass")
    let copy = document.getElementById("copy")
    let passwordfield = document.getElementById("passwordfield")
    passGenBtn.addEventListener("click", (e) => {
        console.log("Created by Creotove");
        console.log("https://github.com/creotove");
        // e.preventDefault();
        let alpha = document.getElementById("alphabets")
        let number = document.getElementById("numbers")
        let specialChar = document.getElementById("specialChar")
        let passlength = document.getElementById("pass-length").value
        let alphabet = ["A", "a", "B", "b", "C", "", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"];
        let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let specs = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
        console.log(passwordfield);
        passwordfield.value = ""
        let finalPassword = []
        let mypass = []
        if (!alpha.checked && !number.checked && !specialChar.checked) {
            alert("please select any of the checkbox")
            location.reload();
        }
        if (alpha.checked) {
            for (let i = 0; i < passlength; i++) {
                finalPassword.push(alphabet[Math.floor(Math.random() * alphabet.length)])
            }

        }
        if (number.checked) {
            for (let i = 0; i < passlength; i++) {
                finalPassword.push(num[Math.floor(Math.random() * num.length)])
            }
        }
        if (specialChar.checked) {
            for (let i = 0; i < passlength; i++) {
                finalPassword.push(specs[Math.floor(Math.random() * specs.length)])
            }
        }
        if(passlength>40)
        {
            alert("select password length less than 40 ")
            location.reload()
        }
        for (let i = 0; i < passlength; i++) {
            let mypass = finalPassword[Math.floor(Math.random() * finalPassword.length)]
            passwordfield.value += mypass
        }
    })
    copy.addEventListener("click", (e) => {
            passwordfield.select()
            passwordfield.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(passwordfield.value)
            alert("Password Copied")
            console.log("Created by Creotove");
            console.log("https://github.com/creotove");
    })
}