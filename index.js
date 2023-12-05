const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obterEntrada(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
}

function calcularSaldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

async function calcularNivel() {
  do {
    // Solicite ao usuário que insira a quantidade de vitórias e derrotas
    var vitorias = parseInt(
      await obterEntrada("Digite a quantidade de vitórias: "),
    );
    var derrotas = parseInt(
      await obterEntrada("Digite a quantidade de derrotas: "),
    );

    // Verifique se as entradas são números válidos
    if (isNaN(vitorias) || isNaN(derrotas)) {
      console.log(
        "Por favor, insira valores numéricos para vitórias e derrotas.",
      );
    } else {
      // Calcula o saldo de vitórias usando a função separada
      var saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);
      var nivelJogador;

      // Determina o nível do jogador com base no saldo de vitórias
      if (saldoVitorias < 10) {
        nivelJogador = "Ferro";
      } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelJogador = "Bronze";
      } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivelJogador = "Prata";
      } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivelJogador = "Ouro";
      } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivelJogador = "Diamante";
      } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivelJogador = "Lendário";
      } else {
        nivelJogador = "Imortal";
      }

      // Exibe a mensagem com o saldo de vitórias e o nível do jogador
      console.log(
        `O Herói tem um saldo de vitórias de ${saldoVitorias} e está no nível de ${nivelJogador}`,
      );
    }

    // Pergunta ao usuário se deseja calcular o nível para outro conjunto de vitórias e derrotas
    var continuar = await obterEntrada(
      "Deseja calcular o nível para outro conjunto de vitórias e derrotas? Digite 'sim' para continuar: ",
    );
  } while (continuar.toLowerCase() === "sim");

  rl.close();
}

// Chama a função principal
calcularNivel();
