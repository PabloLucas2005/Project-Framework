import "./App.css";
import Headerr from "./components/Headerr";
import ModalHtml from "./components/ModalHtml";
import ModalCss from "./components/ModalCss";
import ModalJs from "./components/ModalJs";
import PaginaCursoHtml from "./router/PaginaCursoHtml";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
  setInputValue(event.target.value); // Atualiza o estado com o valor digitado no input
};
const [videoUrl, setVideoUrl] = useState("");



 

  function mandarParaAPI(){
    if(inputValue == "html" || inputValue == "Html"){
      getPosts1("http://localhost:3004/videos/1");
    }else if(inputValue == "css" || inputValue == "Css"){
      getPosts1("http://localhost:3004/videos/2");
    }else if(inputValue == "javascript" || inputValue == "Javascript"){
      getPosts1("http://localhost:3004/videos/3");
    }else{
        alert("erro")
    }
}

const getPosts1 = async (url) => {
  try {
    const response = await axios.get(url);
    setVideoUrl(response.data.url);
  } catch (error) {
    console.log(error);
  }
};

const getPosts2 = async (url) => {
  try {
    const response = await axios.get(url);
    setVideoUrl(response.data.url);
  } catch (error) {
    console.log(error);
  }
};

const getPosts3 = async (url) => {
  try {
    const response = await axios.get(url);
    setVideoUrl(response.data.url);
  } catch (error) {
    console.log(error);
  }
};
  
  
 
  return (
  
      <div>
        <header>
            <div>
                <a href="../App.jsx"><h1>CODEMASTER</h1></a>
            </div>
            <div>
                <ul>
                    <div className="search-container">
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    </div>   
                    <button onClick={mandarParaAPI}><FaSearch className='tamanho'/></button>                 
                </ul>
                
            </div>
        </header>
        <div>
          <div className="center">
          <iframe src={videoUrl} title="video" frameBorder="0" width="100%" height="400" allowFullScreen="true"/>
          </div>
        </div>
      </div>
    
  );
}

export default App;
