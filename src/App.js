import React, { useState } from 'react';
import { Cabecalho } from './Components/Cabecalho/index.jsx'
import { Container } from './Components/Container/index.jsx'
import { Footer } from './Components/Footer/index.jsx';
import { Globalstyle } from './Components/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import { TemaEscuro, TemaClaro } from './Components/Cores/temas'
import { BtnTema } from './Components/Cores/temas'


function App() {

  const [tema, setTema] = useState(true)
  const toggleTema = function () {
    setTema((tema) => !tema)
  }


  return (
    < ThemeProvider theme={tema ? TemaEscuro : TemaClaro}>
      <Globalstyle />
      <Cabecalho />
      <BtnTema onClick={toggleTema}>
        Muda Cor
      </BtnTema>
      <Container />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
