import { Navbar } from '../Navbar/Navbar'
import { Services } from '../Services/Services'
import {Proyectos} from "../Proyectos/Proyectos";
import './Header.css'

export const Header = () => {
    return (
        <header>
          <div id='portfolio'>
            <img src="https://cdn-icons-png.flaticon.com/512/616/616851.png" alt="" />
            <h2>Portafolio</h2>
          </div>
          <div id='ar'>
              <Navbar  anchor='HOME' path="/" /> 
              <Navbar  anchor='SERVICES' path="/Services" /> 
              <Navbar  anchor='Proyectos' path="/Proyectos" Component={Proyectos}/>
              <Navbar  anchor='Contact' path="/Contact"/>
          </div> 
      </header>
      
    )
  }