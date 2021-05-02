/* 2. Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
 

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];*/


let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let numbers = [];
    for (let array in vector) {
        for (let number of vector[array]) {
            if ((number % 2) === 0) {
                numbers.push(number);
            }
        }
    }
    return numbers;
}

console.log(arrayOfNumbers(vector));