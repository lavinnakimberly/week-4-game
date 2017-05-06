$( document ).ready(function() {
    console.log( "ready!" );


	var compPick = Math.floor(Math.random() * (120 - 19)) + 19;
		console.log(compPick)
	$("#targetNumber").text(compPick);

	var wins = 0
	var losses = 0
	var totalScore = 0

	var gemNumbers = [Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1)]
	
	$(".crystal").on("click", function(){
		var userPick = $(this).attr("data-position")
		userScore = gemNumbers[userPick]
		console.log(userScore)
		totalScore = userScore + totalScore 
		console.log(totalScore)
		$("#yourScore").text(totalScore);

		if (totalScore > compPick){
			losses = losses +1;
			$("#loseScore").text(losses);
			totalScore = 0;
			$("totalScore").text(totalScore);
			compPick = Math.floor(Math.random()*100);
			$("#targetNumber").text(compPick);
			gemNumbers = [Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1)];
			$("#result").text("You lose!");
		}

		else if (totalScore === compPick){
			wins = wins +1
			$("#winScore").text(wins + 1);
			totalScore = 0
			$("totalScore").text(totalScore);
			compPick = Math.floor(Math.random()*100);
			$("#targetNumber").text(compPick);
			gemNumbers = [Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1), Math.floor(Math.random()*(12 - 1) + 1)]
			$("#result").text("You win!");
		}

	});

	
});