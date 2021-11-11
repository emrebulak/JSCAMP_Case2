//CASE 1 START

function isPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let counter = 0;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }
    if (counter == 0) {
      console.log(`${numbers[i]} sayısı asal bir sayıdır.`);
    } else {
      console.log(`${numbers[i]} sayısı asal bir sayı değildir.`);
    }
  }
}

isPrime(50, 40, 60, 70, 15, 100, 11, 5, 3, 9, 8);
// CASE 1 END

//CASE 2 START
function isFriendly(number1, number2) {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < number1; i++) {
    if (number1 % i == 0) {
      total1 += i;
    }
  }

  for (let j = 0; j < number2; j++) {
    if (number2 % j == 0) {
      total2 += j;
    }
  }

  return total1 === number2 && total2 == number1
    ? console.log(`${number1} ve ${number2} sayıları arkadaş sayılardır.`)
    : console.log(
        `${number1} ve ${number2} sayıları arkadaş sayı değillerdir.`
      );
}

isFriendly(220, 284);

//CASE 2 END

//CASE 3 START
function isPerfect(number) {
  let total = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      total += i;
    }
  }
  if (number == total) {
    console.log(`Bu sayı mükemmel bir sayıdır : ${number}`);
  }
}

for (let i = 1; i < 1000; i++) {
  isPerfect(i);
}
//CASE 3 END

//CASE 4 START
function isPrime2() {
    for (let i = 2; i < 1000; i++) {
      let counter = 0;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          counter++;
        }
      }
      if (counter == 0) {
        console.log(`${i} sayısı asal bir sayıdır.`);
      }
    }
  }

  isPrime2();
//CASE 4 END
//FİNİSH
