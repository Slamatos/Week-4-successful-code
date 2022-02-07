// for the assignment we need a timer to count down from 50 to 0 in 5 second increments and show "blastoff" at 0
// for my example we are going to count down from 20 to 0 in 2 second increments and show "blastoff" at 0
function blastOffTimer() {
    console.log("blastOffTimer() started");
    var currTime = 50;
    document.getElementById("blastOffText").innerHTML = currTime;
    console.log("50");
    currTime = currTime - 5
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 5000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 10000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 15000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 20000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 25000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 30000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 35000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 40000);
    setTimeout(function () {
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        if (currTime == 5) {
            document.getElementById("blastOffText").innerHTML = "Almost there. 5 seconds left!";
        }
        currTime = currTime - 5
    }, 45000);
    setTimeout(function () {
        console.log("Blast OFF!");
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime = currTime - 5
    }, 50000);
}
function playCraps() {
    //This is the entire function that is responsible for playing Craps
    console.log("Craps has started")
    //This tells the console that the function has started running
    var die1 = (6 * Math.random());
    //This is our first die. The variable allows all numbers from 0 to 5.9 repeating
    var roundDie1 = Math.ceil(die1);
    //This variable tells the computer to round up to the next whole number to replecate a die
    console.log("Your first die is " + roundDie1);
    //This tells the console what the whole number is. The whole number is what is represenative of a die roll
    document.getElementById("die1Res").innerHTML = ("Die one is " + roundDie1);
    //This prints the rsults of "roundDie1" to the webpage
    var even1 = (roundDie1 == 2) || (roundDie1 == 4) || (roundDie1 == 6)
    //This variable is used to locate if the die is even
    if (even1) {
        //This if statement is designed to tell the user if the die is even
        document.getElementById("die1evenCheck").innerHTML = ("Your 1st die is even")
        //This prints to the webpage if your die is even
        console.log("Your first die is even");
        //This prints to the console if your die is even
    }
    var die2 = (6 * Math.random());
    //This is our second die. The variable allows all numbers from 0 to 5.9 repeating
    var roundDie2 = Math.ceil(die2);
    //This variable tells the computer to round up to the next whole number to replecate a die
    console.log("Your second die is " + roundDie2);
    //This tells the console what the whole number is. The whole number is what is represenative of a die roll
    document.getElementById("die2Res").innerHTML = ("Die two is " + roundDie2);
    //This prints the rsults of "roundDie2" to the webpage
    var even2 = (roundDie2 == 2) || (roundDie2 == 4) || (roundDie2 == 6)
    //This variable is used to locate if the die is even
    if (even2) {
        //This if statement is designed to tell the user if the die is even
        document.getElementById("die2evenCheck").innerHTML = ("Your 2nd die is even")
        ////This prints to the webpage if your die is even
        console.log("Your second die is even");
        //This prints to the console if your die is even
    }
    var dieTotal = (roundDie1 + roundDie2);
    //This is used to get our total from the dice
    console.log("Your total is " + dieTotal)
    //This prints our dice roll to the console
    document.getElementById("fullRes").innerHTML = ("Your total is " + dieTotal);
    //This prints our dice roll to the webpage

    //This "if" statement is used to determine the bounds and conditions of the game
    if (dieTotal == 7 || dieTotal == 11) {
        //This statement is used to find out if you lose
        document.getElementById("crapsRes").innerHTML = "Craps, you lose!";
        //Prints to the webpage that you lost
        console.log("Craps, you lose!");
        //Prints to the console that you lost
    } else if (roundDie1 == roundDie2 && roundDie1 % 2 == 0) {
        //This statement is used to find out if you win
        document.getElementById("crapsRes").innerHTML = "You win!";
        //Prints to the webpage that you won
        console.log("You win!")
        //Prints to the console that you won
    } else {
        //This statement is used to find out if you tied
        document.getElementById("crapsRes").innerHTML = "Whoops, you tied!";
        //Prints to the webpage that you tied
        console.log("Whoops, you tied!")
        //prints to the console that you tied
    }


}