import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';


function gerarQuestao(operacao) {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  let respostaCorreta;
  let enunciado;

  switch (operacao) {
    case '+':
      respostaCorreta = a + b;
      enunciado = `Se Luana tem ${a} balas e ganha mais ${b} balas, com quantas balas ela fica?`;
      break;
    case '-':
      respostaCorreta = a - b;
      enunciado = `Se Luana tem ${a} balas e dá ${b} balas para João, com quantas balas ela fica?`;
      break;
    case '*':
      respostaCorreta = a * b;
      enunciado = `Luana tem ${a} caixas, cada uma com ${b} balas. Quantas balas ela tem no total?`;
      break;
    case '/':
      // Garantir que a divisão tenha resultado inteiro sem resto.
      respostaCorreta = Math.floor(a / b);
      enunciado = `Luana tem ${a} balas e quer dividir igualmente entre ${b} amigos. Quantas balas cada um receberá?`;
      break;
    default:
      respostaCorreta = 0;
      enunciado = 'Operação inválida';
  }

  // Gerar alternativas erradas
  const alternativas = [
    respostaCorreta,
    respostaCorreta + (Math.floor(Math.random() * 5) + 1),
    respostaCorreta - (Math.floor(Math.random() * 5) + 1),
    respostaCorreta + (Math.floor(Math.random() * 10) + 2)
  ];

  // Embaralhar alternativas
  alternativas.sort(() => Math.random() - 0.5);

  return {
    enunciado,
    alternativas,
    respostaCorreta,
    a,
    b,
    operacao
  };
}


function TelaPratica({ operacao, onVoltar }) {
  const [questao, setQuestao] = useState(null);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => {
    setQuestao(gerarQuestao(operacao));
  }, [operacao]);

  const verificarResposta = () => {
    setMostrarResultado(true);
  };

  const novaQuestao = () => {
    setQuestao(gerarQuestao(operacao));
    setRespostaSelecionada(null);
    setMostrarResultado(false);
  };

  if (!questao) return null;

  return (
    <div className="tela-pratica">
      <button className="botao-voltar" onClick={onVoltar}>⬅</button>

      <div className="enunciado">
        <h3>{questao.enunciado}</h3>
      </div>

      <div className="alternativas">
        {questao.alternativas.map((alt, index) => (
          <button
            key={index}
            className={`alternativa ${respostaSelecionada === alt ? 'selecionada' : ''}`}
            onClick={() => setRespostaSelecionada(alt)}
            disabled={mostrarResultado}
          >
            {alt} balas
          </button>
        ))}
      </div>

      {!mostrarResultado && (
        <button className="botao-verificar" onClick={verificarResposta} disabled={respostaSelecionada === null}>
          Verificar
        </button>
      )}

  {mostrarResultado && (
    <div className="resultado fade-in">
      {respostaSelecionada === questao.respostaCorreta ? (
        <>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <p>✅ Parabéns! Você acertou!</p>
        </>
      ) : (
        <p>❌ Ops! Você errou.</p>
      )}
      <p><strong>Explicação:</strong> {questao.a} {questao.operacao} {questao.b} = {questao.respostaCorreta}</p>

      <button className="botao-nova" onClick={novaQuestao}>Nova Questão</button>
    </div>
  )}

    </div>
  );
}

export default TelaPratica;
