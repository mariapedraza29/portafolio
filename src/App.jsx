import './index.css'
import { Route , Routes} from 'react-router-dom'
import{Main} from './componets/Main/Main'
import {NotFount} from './componets/NotFound/NotFount'
import { Services } from './componets/Services/Services'
import { Proyectos } from './componets/Proyectos/Proyectos'
import { Contact } from './componets/Contact/Contact'
function App() {
  return (
    <>
      <div className='App'>
          <Routes>
          <Route path="/" Component={Main}/>
          <Route path="/h" Component={NotFount}/>
          <Route path='/services' Component={Services}/>
          <Route path='/Proyectos' Component={Proyectos}></Route>
          <Route path='/contact' Component={Contact}></Route>
          
          
        </Routes>
      </div>
        
    </>
    
  )
}

export default App
