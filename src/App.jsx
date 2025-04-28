import React, { useState } from 'react';
import TelaInicial from './TelaInicial';
import TelaPratica from './TelaPratica';

function App() {
  const [operacaoSelecionada, setOperacaoSelecionada] = useState(null);

  const selecionarOperacao = (operacao) => {
    setOperacaoSelecionada(operacao);
  };

  const voltarTelaInicial = () => {
    setOperacaoSelecionada(null);
  };

  return (
    <div className="container">
      {!operacaoSelecionada ? (
        <TelaInicial onSelecionar={selecionarOperacao} />
      ) : (
        <TelaPratica operacao={operacaoSelecionada} onVoltar={voltarTelaInicial} />
      )}
    </div>
  );
}

export default App;
