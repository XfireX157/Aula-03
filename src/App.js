import { Cabecalho } from './Components/Cabecalho/index.jsx'
import { Container } from './Components/Container/index.jsx'
import { Footer } from './Components/Footer/index.jsx';
import { Globalstyle } from './Components/GlobalStyle.js'


function App() {
  return (
    <>
      <Globalstyle />
      <Cabecalho />
      <Container />
      <Footer />
    </>
  );
}

export default App;
