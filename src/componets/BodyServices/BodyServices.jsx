import React from 'react'
import './BodyServices.css'
export const BodyServices = () => {
  return (
    <div className='genServices'>
      <h1 id='title'>Front-End</h1>
      <hr />
      <div className='alto'>
        
          <div className="cardOne">
              <h2>React</h2>
              <img src="./public/images/react.jpg" className="ImagesLogo" alt="" />
              <p>Manejo de react en visual studio code, con diferentes librerias para el diseño de la pag, manejo de huck's y el DOM</p>
          </div>
          <div className="cardOne">
              <h2>CSS</h2>
              <img src="./public/images/css.jpg" className="ImagesLogo" alt="" />
              <p>Manejo de react en visual studio code, con diferentes librerias para el diseño de la pag, manejo de huck's y el DOM</p>
          </div>
          <div className="cardOne">
              <h2>Html</h2>
              <img src="./public/images/Html.png" alt="" />
              <p>Conocimiento en Html nativo y cada unas las propiedades de html</p>
          </div>
      </div>
      <h1 id='title'>Back-End</h1>
      <hr />

      <div className='bajo'>
        <div className="cardOne">
              <h2>Java</h2>
              <img src="https://cdn-icons-png.flaticon.com/256/226/226777.png " className="ImagesLogo" alt="" />
              <p>Manejo de react en visual estudio code con diferentes librerias</p>
          </div>
          <div className="cardOne">
              <h2>NodeJs</h2>
              <img src="./public/images/nodejs.jpg" className="ImagesLogo" alt="" />
              <p>Conocimiento en Html nativo y cada unas las propiedades de NodeJs</p>
          </div>
          <div className="cardOne">
              <h2>C#</h2>
              <img src="./public/images/c.png" className="ImagesLogo" alt="" />
              <p>Manejo del Back-end en c#, en la parte web</p>
          </div>
          
      </div>
    </div>
  )
}
