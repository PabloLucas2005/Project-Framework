import '../App.css'
import LOGO from '../img/LOGO.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiLogoDiscourse } from "react-icons/bi";
function Headerr(){

    return(
        <>
        
        <header>
            <div className='logo-header'>
                <img src={LOGO} alt="" className='logo' />
                <a href="../App.jsx"><h1>CODEMASTER</h1></a>
            </div>
            <div>
                <ul>
                    <button><li><BiHomeAlt2 className='home icons-header'></BiHomeAlt2></li></button>
                    <button><li><HiOutlineUserGroup className='dev icons-header'></HiOutlineUserGroup></li></button>
                    <button><li><BiLogoDiscourse className='course icons-header'></BiLogoDiscourse></li></button>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Headerr