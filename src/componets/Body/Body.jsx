import './Body.css'
import { Social } from "../Social/Social"
export const Body= () => {
  return (
    <section className='gen'>
      <section className="info">
          <h2 className='p'>Hello, it's Me</h2>
          <p className='p1'>Maria Pedraza</p>
          <h2>And i'm a
           <span> FrontEnd </span> </h2>
          <p className='p2'>passionate about programinng and new technlogies. I am dedicate to the develoment and innovation that meet the needs of custaments</p>
          <section className='w-40 flex items-center justify-around'>
            <div className='l1 '>
              <a href="https://www.instagram.com/mariiapedraza_29/"><Social/></a>
            </div>
            <div className='l2'>
              <a href="https://web.facebook.com/MariaRPV29"><Social/></a>
            </div>
            <div className='l3'>
              <a href="https://www.linkedin.com/in/mariia-pedraza-212a66203/"><Social/></a>
            </div>
          </section>
          
          <button>Download CV</button>
      </section>
      <section className="image"> 
        <img src="./public/images/FotoPortafolio.jpg" alt="" className='w-72 h-72'/>
      </section>
     </section>
    
  )
}