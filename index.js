
// document.querySelector("button").addEventListener("click", handleClick); //so in .addEventListener the funtion should not be called () this way coz it is a "straight up method call" & it will then call that function for the whole code and not on that perticular sec. Its just a JS fart.
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", function (){alert("'k' got clicked")});
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked..!!");
// }

// alt way of doing the same thing

for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){ //alert("I got clicked")
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    clickAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    clickAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom = new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "j":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
    
        default:
            break;
    }
}
function clickAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}


//// HIGHER ORDER FUNCTION & FUNCTION PASSING THROUGH ARGUMENT

// function add(num1, num2){
//     return num1+num2;
// }
// function subtract(num1, num2){
//     return num1-num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }
// function divide(num1, num2){
//     return num1/num2;
// }
// function modulo(num1, num2){
//     return num1%num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2)
// }


//// JS OBJECTS
// var stu1 = {
//     name: "Saurav",
//     age: 19,
//     eligible: true,
//     lang: ["Hindi", "English"]
// }

// alert("Stu1 name is: "+ stu1.name);

//// JS CONSTRUCT FUNCTION:
// function studentData(name, age, elegible, lang) {
//     this.name = name;
//     this.age = age;
//     this.elegible = elegible;
//     this.lang = lang;
// }

// var stu1 = new studentData("saurav", 10, true, ["Hindi", "English"])
// //call the data by:
// studentData.stu1;

//// You can add function to the constuct function too:
// function studentData(name, age, elegible, lang) {
//     this.name = name;
//     this.age = age;
//     this.elegible = elegible;
//     this.lang = lang;
//     this.study = function (){alert("Study in progress...")}
// }
//// call this func by:
// var stu1 = new studentData("saurav", 10, true, ["Hindi", "English"])
// stu1.study(); //// it might be looking similar to the audio syntax you used.
//it's object might be called this way:
// function Audio(fileLocation){
//     this.fileLocation = fileLocation;
//     this.play = function (){
            //Tap into audio hardware
            //Check the file at  fileLocation exists.
            //Check the file at fileLocation is sound file.
            //Play the file at the fileLocation.
//     }
// }
