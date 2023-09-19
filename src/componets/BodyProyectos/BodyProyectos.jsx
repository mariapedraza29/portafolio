import React from 'react'
import './BodyProyectos.css'

export const BodyProyectos = () => {
  return (
    <div className="Proyectos">
        <div className= 'Blueasy'>
          <h1>Blueasy</h1>
          <a href="https://blueasymaria.netlify.app/"><img src="./public/images/Blueasy.png" alt="Pagina de gif"></img></a>
        </div>
        <div className= 'Bleux'>
          <h1>Bleux</h1>
          <a href="https://bleux.netlify.app/"><img src="./public/images/Bleux.png" alt="Pagina de gif"></img></a>
        </div>
        <div className= 'Giphy'>
          <h1>Giphy</h1>
          <a href="https://giphyproyect.netlify.app/"><img src="./public/images/giphy.png" alt="Pagina de gif"></img></a>
        </div>
    </div>
  )
}
