// Iteration 2: Generate 2 random number and display it on the screen

const num1 = document.getElementById("number1")
const num2 = document.getElementById("number2")
localStorage.clear()
var randomNumber1 = Math.floor(Math.random()*100)+1
var randomNumber2 = Math.floor(Math.random()*100)+1

num1.textContent=randomNumber1
num2.textContent=randomNumber2

// Iteration 3: Make the options button functional
var big = document.getElementById("greater-than")
var small = document.getElementById("lesser-than")
var equalSymbol = document.getElementById("equal-to")
var score = 0

big.onclick = () =>{
    time = 6
    if (randomNumber1 > randomNumber2){
        score += 1
        countDown()
        localStorage.setItem("score",score)
    }
    else{
    
        localStorage.setItem("score",score)
        window.location.href = "./gameover.html"
    }
    randomNumber1 = Math.floor(Math.random()*100)+1
    num1.textContent = randomNumber1

    randomNumber2 = Math.floor(Math.random()*100)+1
    num2.textContent = randomNumber2

}

small.onclick = () =>{
    time = 6
    if (randomNumber1 < randomNumber2){
        score += 1
        countDown()
        localStorage.setItem("score",score)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href = "./gameover.html"
    }
    randomNumber1 = Math.floor(Math.random()*100)+1
    num1.textContent = randomNumber1

    randomNumber2 = Math.floor(Math.random()*100)+1
    num2.textContent = randomNumber2

}
equalSymbol.onclick =() =>{
    time=6
    if(randomNumber1 === randomNumber2){
        score += 1
        countDown()
        localStorage.setItem('score',score)
    }
    else{
        localStorage.setItem("score",score)
        window.location.href = "./gameover.html"
    }
    randomNumber1 = Math.floor(Math.random()*100)+1
    num1.textContent = randomNumber1

    randomNumber2 = Math.floor(Math.random()*100)+1
    num2.textContent = randomNumber2
}



console.log(score)
// Iteration 4: Build a timer for the game


var time=6
var timerDiv=document.getElementById("timer")
function countDown(){
    if (time<=0){
        window.location.href = "./gameover.html"
        
    }
    else{
        time--
        timerDiv.textContent=time

    }
}
setInterval(countDown,1000)