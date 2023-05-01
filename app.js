function generatePowerBallNumbers() {
  let numbers = [];

  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 69) + 1;
    numbers.push(num);
  }

  let powerBallNum = Math.floor(Math.random() * 26) + 1;
  numbers.push(powerBallNum);
  return numbers;
}

function generateAndDisplayNumbers() {
  let powerBallNumbers = generatePowerBallNumbers();
  let numbersElement = document.getElementById("power-ball-numbers");

  numbersElement.innerHTML = "";

  for (let i = 0; i < powerBallNumbers.length; i++) {
    if (i == powerBallNumbers.length - 1) {
      numbersElement.innerHTML += "Power Ball: " + powerBallNumbers[i];
    } else {
      numbersElement.innerHTML += powerBallNumbers[i] + " ";
    }
  }
}
