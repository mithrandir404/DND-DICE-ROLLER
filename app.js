function rollDice() {
	var diceNotation = document.getElementById("diceInput").value;
	var diceArray = diceNotation.split(",");
	var total = 0;
	var resultString = "";

	for (var i = 0; i < diceArray.length; i++) {
		var diceString = diceArray[i];
		var parts = diceString.split("d");
		var numDice = parseInt(parts[0]);
		var numSides = parseInt(parts[1]);
		var diceRolls = [];

		for (var j = 0; j < numDice; j++) {
			var roll = Math.floor(Math.random() * numSides) + 1;
			diceRolls.push(roll);
			total += roll;
		}

		resultString += "Rolled " + numDice + "d" + numSides + ": " + diceRolls.join(", ") + "\n";
	}

	resultString += "Total: " + total;
	alert(resultString);
}