import "./App.css";
import Headerr from "./components/Headerr";
import ModalHtml from "./components/ModalHtml";
import ModalCss from "./components/ModalCss";
import ModalJs from "./components/ModalJs";
import PaginaCursoHtml from "./router/PaginaCursoHtml";

function App() {
  return (
  
      <div>
        <Headerr></Headerr>
        <div>
          <div className="center">
           <a href="./PaginaCursoHtml"><ModalHtml></ModalHtml></a>
          </div>
        </div>
      </div>
    
  );
}

export default App;
