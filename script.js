
form.addEventListener('checkbox', i => {
    i.preventDefault()
    const includeLowercase = includeLowercaseElement.checked
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(includeLowercase, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
  })
//generate password
function generate(){
    var complexity = document.getElementById("slider").value;
    //possible password values
    var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
    var password = "";
    //create loop
    for(var i = 0; i <= complexity; i++){password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));}
    //add password to textbox/display area
    document.getElementById("display").value = password;
    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";  }

//set default length display of 68
document.getElementById("length").innerHTML = "Length: 68";
//function to set length based on slider position
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0) {document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;}
    else {document.getElementById("length").innerHTML = "Length: 1";}}

//function to copy password to clipboard
function copyPassword(){document.getElementById("display").select();
document.execCommand("Copy");
alert("Password copied to clipboard!");}