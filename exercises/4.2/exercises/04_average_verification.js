let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbersSum = 0;
for(number of numbers) {
    numbersSum += number;
}

let arithmeticAverage = numbersSum / numbers.length;

if (arithmeticAverage > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}