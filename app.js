function generatePowerBallNumbers() {
  let numbers = [];

  for (let i = 0; i < 5; i++) {
    let num1 = Math.floor(Math.random() * 69) + 1;
    numbers.push(num1);
  }

  let powerBallNum = Math.floor(Math.random() * 26) + 1;
  numbers.push(powerBallNum);
  return numbers;
}

function generateAndDisplayNumbers1() {
  let powerBallNumbers = generatePowerBallNumbers();
  let numbersElement1 = document.getElementById("power-ball-numbers");

  numbersElement1.innerHTML = "";

  for (let i = 0; i < powerBallNumbers.length; i++) {
    if (i === powerBallNumbers.length - 1) {
      numbersElement1.innerHTML += "Power Ball: " + powerBallNumbers[i];
    } else {
      numbersElement1.innerHTML += powerBallNumbers[i] + " ";
    }
  }
}
function generateMegaNumbers() {
  let numbers = [];

  for (let i = 0; i < 5; i++) {
    let num2 = Math.floor(Math.random() * 70) + 1;
    numbers.push(num2);
  }

  let megaNum = Math.floor(Math.random() * 25) + 1;
  numbers.push(megaNum);
  return numbers;
}

function generateAndDisplayNumbers2() {
  let megaNumbers = generatePowerBallNumbers();
  let numbersElement2 = document.getElementById("mega-millions-numbers");

  numbersElement2.innerHTML = "";

  for (let i = 0; i < megaNumbers.length; i++) {
    if (i === megaNumbers.length - 1) {
      numbersElement2.innerHTML += "Mega Ball: " + megaNumbers[i];
    } else {
      numbersElement2.innerHTML += megaNumbers[i] + " ";
    }
  }
}
