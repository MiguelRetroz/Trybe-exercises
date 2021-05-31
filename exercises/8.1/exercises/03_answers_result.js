// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito),
// o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma
// função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante.
// Ao final a HOF deve retornar o total da contagem de respostas certas.

//  - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
//    e quando não houver resposta ("N.A") não altera-se a contagem.

const answersResult = (answerSheet, answers, callback) => {
  return `Score = ${callback(answerSheet, answers)}.`;
}

const answersChecker = (answersSheet, answers) => {
  let score = 0;
  for (let index = 0; index < answersSheet.length; index += 1) {
    if (answersSheet[index] !== 'N.A' && answersSheet[index] === answers[index]) {
      score += 1;
    };
  };
  return score;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(answersResult(rightAnswers, studentAnswers, answersChecker));