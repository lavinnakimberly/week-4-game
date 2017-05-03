$( document ).ready(function() {
    console.log( "ready!" );


	var compPick = Math.floor(Math.random()*100)
		console.log(compPick)
	$("#targetNumber").text(compPick);

	var wins = 0
	var losses = 0
	var totalScore = 0

	var gemNumbers = [10,2,13,1]
	
	$(".crystal").on("click", function(){
		var userPick = $(this).attr("data-position")
		userScore = gemNumbers[userPick]
		console.log(userScore)
		totalScore = userScore + totalScore 
		console.log(totalScore)
		$("#yourScore").text(totalScore);

		if (totalScore > compPick){
			losses = losses +1
			$("#loseScore").text(losses)
			totalScore = 0
			$("totalScore").text(totalScore)
			compPick = Math.floor(Math.random()*100)
			$("#targetNumber").text(compPick);
		}

		else if (totalScore === compPick){
			wins = wins +1
			$("#winScore").text(wins + 1)
			totalScore = 0
			$("totalScore").text(totalScore)
			compPick = Math.floor(Math.random()*100)
			$("#targetNumber").text(compPick);
			
		}



	});

	



});