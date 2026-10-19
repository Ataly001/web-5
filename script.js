if (document.title == "Task 0") {
    console.log("Zhailybaev Ataly");
    console.log("SE-2530");
    alert("Hello, JavaScript World!");
}

if(document.title="Task 1"){
    let name="Ataly";
    let age=18;
    let isBoxer=true;

    console.log("My name is " +name);
    console.log("And I am "+ age + " years old");
    console.log("Am I a boxer-" +isBoxer);

    let a=15;
    let b=5;

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);

    console.log("Hello " + name);
}

function changeText(){
   let message = document.getElementById("message");

    if (message.textContent == "Your grade is 2") {
        message.textContent = "Your grade is 5";
    } else {
        message.textContent = "Your grade is 2";
    }
}

function changeColor() {
    let block = document.getElementById("block");

    if (block.style.backgroundColor == "orange") {
        block.style.backgroundColor = "lightblue";
    } else {
        block.style.backgroundColor = "orange";
    }
}

function changeSize() {
    let block = document.getElementById("block");

    if (block.style.fontSize == "30px") {
        block.style.fontSize = "16px";
    } else {
        block.style.fontSize = "30px";
    }
}