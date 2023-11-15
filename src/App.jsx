import './App.css'
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import Headerr from './components/Headerr';
function App() {


  return (
    
  <div>

    <Headerr></Headerr>
    <div>
      <div className='center'>
      <button><DiHtml5 className='icons' id='html'></DiHtml5></button>
     <button><DiCss3 className='icons' id='css'></DiCss3></button>
      <button><DiJavascript className='icons' id='javascript'></DiJavascript></button>
      </div>
   
    </div>
  </div>
  )
}

export default App
