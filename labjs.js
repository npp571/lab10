function greetuser(){
    let firstname = 'User';
    let greeting = `Welcome, ${firstname}!`;
    console.log(greeting)
    document.getElementById("output").innerHTML = greeting
}
greetuser()

function changeText(){
    let newmessage = document.getElementById("message");
    newmessage.innerText = "Hello, World!";
}

function addNumbers(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let sum = number1 + number2;
    document.getElementById('result').textContent = `Result = ${sum}`;
}
addNumbers()

function updateTitle(){
    let newTitle = document.getElementById("inputfield").value;
    let titletext = document.getElementById("title");
    titletext.innerText = newTitle;
}


function concatenatestrings(){
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;
    let result = document.getElementById("combinedtext");
    result.innerText = `${str1} ${str2}`;
}


    document.getElementById("changebackground").addEventListener("click", function(){
            let colorbox = document.getElementById("colorbox");
            colorbox.style.backgroundColor = "blue";
    })
