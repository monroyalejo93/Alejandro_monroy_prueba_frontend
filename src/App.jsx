
import './App.css';
import BannerContainer from "./ContenedorBanner/contenedor_banner"
import Slide from './ContenedorSlide/Slide';
import InputsContainer from './ContenedorInputs/Contenedor_inputs';
import FooterContainer from './ContenedorFooter/Contenedor_footer'

function App() {
  return (
    <div className="App">

        <BannerContainer /><br />
        <Slide /><br />
        <InputsContainer />
        <FooterContainer /><br />

    </div>
  );
}

export default App;
