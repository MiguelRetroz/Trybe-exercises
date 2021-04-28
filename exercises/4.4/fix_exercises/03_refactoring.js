let numberA = 5;
let numberB = 3;

/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */
{
// Sum
function sum (number01, number02) {
    return (number01 + number02);
};

console.log(sum(numberA, numberB));

// Subtraction
function subtraction (number01, number02) {
    return (number01 - number02);
};

console.log(subtraction(numberA, numberB));

// Multiplication
function multiplication (number01, number02) {
    return (number01 * number02);
};

console.log(multiplication(numberA, numberB));

// Division
function division (number01, number02) {
    return (number01 / number02);
};

console.log(division (numberA, numberB));

// Modulus
function modulus (number01, number02) {
    return (number01 % number02);
};

console.log(modulus(numberA, numberB));
};

console.log();

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
{
    function higherNumber (number01, number02) {
        let higher = number01;

        if (number02 > number01) {
            higher = number02;
        };
        
        return higher;
    };

    console.log(higherNumber(numberA, numberB));
};

console.log();

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
{
    function higherInThree (number01, number02, number03) {
        let higher = number01;

        if (number02 > higher) {
            higher = number02;
        };
        if (number03 > higher) {
            higher = number03;
        };

        return higher;
    };

    console.log(higherInThree(numberA, numberB, 15));
};

console.log();

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
{
    function numberSign (number) {
        if (number > 0) {
            return 'Positive';
        } else if (number < 0) {
            return 'Negative';
        } else {
            return 'Zero';
        };
    };

    console.log(numberSign(4));
};