import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';


function gerarQuestao(operacao) {
  let a = operacao === '*' ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 21);
  let b;

  if (operacao === '/' || operacao === '*') {
    b = Math.floor(Math.random() * 10);
  } else if (operacao === '*') {
    b = Math.floor(Math.random() * 10);
  } else {
    b = Math.floor(Math.random() * 21);
  }

  let respostaCorreta;
  let enunciado;

  const x = operacao === '-' ? Math.max(a, b) : a;
  const y = operacao === '-' ? Math.min(a, b) : b;

  switch (operacao) {
    case '+':
      respostaCorreta = a + b;
      enunciado = `Se Luana tem ${a} balas e ganha mais ${b} balas, com quantas balas ela fica?`;
      break;
    case '-':
      respostaCorreta = x - y;
      enunciado = `Se Luana tem ${x} balas e dá ${y} balas para João, com quantas balas ela fica?`;
      break;
    case '*':
      respostaCorreta = a * b;
      enunciado = `Luana tem ${a} caixas, cada uma com ${b} balas. Quantas balas ela tem no total?`;
      break;
    case '/':
      b = Math.floor(Math.random() * 9) + 1;
      const fator = Math.floor(Math.random() * 5);
      a = b * fator;

      respostaCorreta = a / b;
      enunciado = `Luana tem ${a} balas e quer dividir igualmente entre ${b} amigos. Quantas balas cada um receberá?`;
    break;
    default:
      respostaCorreta = 0;
      enunciado = 'Operação inválida';
  }

  const alternativasSet = new Set();
  alternativasSet.add(respostaCorreta);

  while (alternativasSet.size < 4) {
    const alternativa = Math.max(0, respostaCorreta + Math.floor(Math.random() * 11) - 5);
    alternativasSet.add(alternativa);
  }

  const alternativas = Array.from(alternativasSet).sort(() => Math.random() - 0.5);

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
  const [questaoAtual, setQuestaoAtual] = useState(1);
  const [totalAcertos, setTotalAcertos] = useState(0);
  const [fimDoJogo, setFimDoJogo] = useState(false);


  useEffect(() => {
    setQuestao(gerarQuestao(operacao));
  }, [operacao]);

  const verificarResposta = () => {
    setMostrarResultado(true);
    if (respostaSelecionada === questao.respostaCorreta) {
      setTotalAcertos(prev => prev + 1);
    }
  };


  const novaQuestao = () => {
    if (questaoAtual >= 5) {
      setFimDoJogo(true);
    } else {
      setQuestao(gerarQuestao(operacao));
      setRespostaSelecionada(null);
      setMostrarResultado(false);
      setQuestaoAtual(prev => prev + 1);
    }
  };

  if (fimDoJogo) {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontSize: '1.5rem' }}>
      <h2>🎉 Fim do jogo!</h2>
      <p>Você acertou <strong>{totalAcertos}</strong> de 5 questões.</p>
      <button
        onClick={() => {
          setFimDoJogo(false);
          setQuestaoAtual(1);
          setTotalAcertos(0);
          onVoltar();
        }}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '2rem',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(145deg, #7B3FF2 0%, #5B2BB5 100%)',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Jogar Novamente
      </button>
    </div>
  );
}


  if (!questao) return null;

  return (
    <div className="tela-pratica" style={{ 
      position: 'relative',
      padding: '40px',
      background: 'linear-gradient(135deg, rgba(123, 63, 242, 0.1) 0%, rgba(124, 216, 227, 0.1) 100%)',
      minHeight: '100vh',
    }}>
      {/* Efeitos de fundo */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(123, 63, 242, 0.15) 0%, transparent 50%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 80%, rgba(124, 216, 227, 0.15) 0%, transparent 50%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 75%)',
        backgroundSize: '60px 60px',
        opacity: 0.2,
        zIndex: 0,
      }} />

      <button 
        className="botao-voltar" 
        onClick={onVoltar}
        style={{
          position: 'absolute',
          top: '1px',
          left: '30px',
          zIndex: 2,
          background: 'linear-gradient(145deg, #7B3FF2 0%, #5B2BB5 100%)',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        ⬅
      </button>

      <div className="enunciado" style={{
        position: 'relative',
        zIndex: 1,
        background: 'linear-gradient(145deg, #7B3FF2 0%, #5B2BB5 100%)',
        borderRadius: '16px',
        padding: '25px',
        margin: '40px 0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '600',
          letterSpacing: '1px',
          fontFamily: 'Josefin Sans, sans-serif',
          color: 'white',
          margin: 0,
          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}>
          {questao.enunciado}
        </h3>
      </div>

      <div className="alternativas" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        margin: '40px 0',
        padding: '0 20px',
      }}>
      {questao.alternativas.map((alt, index) => {
        const isSelecionada = respostaSelecionada === alt;

        return (
          <button
            key={index}
            className={`alternativa ${isSelecionada ? 'selecionada' : ''}`}
            onClick={() => setRespostaSelecionada(alt)}
            disabled={mostrarResultado}
            style={{
              background: isSelecionada 
                ? 'linear-gradient(145deg,rgb(255, 230, 0) 0%, #FFEC8B 100%)'
                : 'linear-gradient(145deg, rgb(124, 216, 227) 60%, rgb(76, 82, 170) 100%)',
              color: isSelecionada ? '#000000' : '#3B006A',
              fontWeight: isSelecionada ? 'bold' : '500',
              border: 'none',
              borderRadius: '12px',
              padding: '15px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease',
            }}
          >
            {alt} {alt === 1 ? 'bala' : 'balas'}
          </button>
        );
      })}
    </div>

      {!mostrarResultado && (
        <button 
          className="botao-verificar" 
          onClick={verificarResposta} 
          disabled={respostaSelecionada === null}
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'linear-gradient(145deg, #7B3FF2 0%, #5B2BB5 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '15px 30px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1.1rem',
            fontWeight: '500',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'all 0.2s ease',
            margin: '20px 0',
          }}
        >
          Verificar
        </button>
      )}

      {mostrarResultado && (
        <div className="resultado fade-in" style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(145deg, #7B3FF2 0%, #5B2BB5 100%)',
          borderRadius: '16px',
          padding: '25px',
          margin: '40px 0',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          {respostaSelecionada === questao.respostaCorreta ? (
            <>
              <Confetti width={window.innerWidth} height={window.innerHeight} />
              <p style={{ margin: '0 0 10px 0' }}>✅ Parabéns! Você acertou!</p>
            </>
          ) : (
            <p style={{ margin: '0 0 10px 0' }}>❌ Ops! Você errou.</p>
          )}
          <p style={{ margin: '0 0 15px 0' }}>
            <strong>Explicação:</strong> {questao.a} {questao.operacao} {questao.b} = {questao.respostaCorreta}
          </p>

          <button 
            className="botao-nova" 
            onClick={novaQuestao}
            style={{
              background: 'linear-gradient(145deg, rgb(124, 216, 227) 60%, rgb(76, 82, 170) 100%)',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 24px',
              color: '#3B006A',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '500',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.2s ease',
            }}
          >
            Nova Questão
          </button>
        </div>
      )}
    </div>
  );
}

export default TelaPratica;
