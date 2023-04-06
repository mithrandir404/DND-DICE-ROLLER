function rollDice(numDice, numSides, modifier) {
  let total = 0;
  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    rolls.push(roll);
    total += roll;
  }
  total += modifier;
  const rollsString = rolls.join(', ');
  return { total, rollsString };
}

function rollDiceAndDisplayResult() {
  const diceInput = document.getElementById('dice-input');
  const modifierInput = document.getElementById('modifier-input');
  const resultHeader = document.getElementById('result-header');
  const resultText = document.getElementById('result-text');
  const resultCard = document.getElementById('result-card');

  const diceNotation = diceInput.value.trim();
  const match = diceNotation.match(/^(\d+)d(\d+)$/);
  if (!match) {
    alert('Invalid dice notation! Please enter a valid notation, such as "2d6".');
    return;
  }

  const numDice = parseInt(match[1]);
  const numSides = parseInt(match[2]);
  const modifier = parseInt(modifierInput.value) || 0;

  const rollResult = rollDice(numDice, numSides, modifier);
  resultHeader.textContent = `Rolling ${numDice}d${numSides}${modifier > 0 ? `+${modifier}` : modifier < 0 ? modifier : ''}`;
  resultText.textContent = `You rolled: ${rollResult.rollsString}. Total: ${rollResult.total}`;
  resultCard.classList.remove('hidden');
}

const rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', rollDiceAndDisplayResult);
