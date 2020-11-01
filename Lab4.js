/*
Author: Karly Lamm
Date: October 28th, 2020
Assignment 4
Lindenwood University
Computer Science

*/ 

// Random number between 1 and 100 variable
const randomNumber = Math.floor(Math.random()*100)+1;
//Show alert function
function showAlert(){
	var userTyped = $("#userGuess").val();
	//console.log(typeof userTyped)

	if(userTyped==randomNumber){
		$(guessData).append("<li>YOU'RE A GENIUS! Your guess of "+userTyped+" was correct");
	}
	if(userTyped>randomNumber){
		$(guessData).append("<li>Your guess of "+userTyped+" was too high!");
	}
	if(userTyped<randomNumber){
		$(guessData).append("<li>Your guess of "+userTyped+" was too low!");
	}

}
//Reveal answer function
function showAnswer(){
	$(guessData).append("<li>If you must know... My number was: "+randomNumber);
}
//Erase bullets to start over
function eraseAnswers(){
	$(guessData).html("");
/*	$(guessData).html(function(){
		$(guessData).empty()
	});*/
}

//Function for button click
function addBullet(){
	var userTyped = $("#userGuess").val();
	$("#guessData").append("<li>"+userTyped);
	$("#userGuess").val("[Enter your guess here!]");
	$("#guessButton").click(showAlert);
	$("#revealButton").click(showAnswer);
	$("#clearButton").click(eraseAnswers);
}
$(document).ready(addBullet);