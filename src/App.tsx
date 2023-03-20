import { Contador } from './components/Contador'
import { ContadorHook } from './components/ContadorHook'
import { Login } from './components/Login'
import { Funciones } from './typescript/Funciones'
import { ObjetosLiterales } from './typescript/ObjetosLiterales'
import { TiposBasicos } from './typescript/TiposBasicos'

const App = () => {

  

  return (
    <div className='mt-2'>
      <h1>Introduccion a TS - React</h1>
      <hr/>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorHook/> */}
      <Login/>
      
    </div>
  )
}

export default App
