import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import banner from './assets/Empresarios.png'
import final from './assets/edificios.png'
import video from  './assets/video.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='barra'>
      <div className='barraSuperior'>
        <button>Iniciar Sesión</button>
      </div>
    </nav>
      <div >
          <img src={banner} className="banner" alt="Vite logo" />
          <div className='contenedorTitulo'>
          <h1 className='tituloBanner'>¡Aprende a invertir tu dinero!</h1>
          </div>
          
          <span className='spanTitulo'>Únete a la 2da generación de mi curso</span>
          <br />
          <div className='contenedorSpan'>
          <span className='spanSubtitulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </span>
          </div>
          <br /><br />
          <button className='botonBanner'>Únete al reto</button>
      </div>
        <br /><br /><br /> <br /><br /><br /><br />
      <div>
        <h1 className='contenedorMedio'>¿EN QUE CONSISTE MI RETO FINANCIERO?</h1>
        <p className="textoMedio">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <br />
        <button className='botonMedio'>Integrate</button>
        <video className='video' src={video} width="540" controls></video>
        <br /><br /><br /><br />
      </div>
     
      <div className='Final'>
      <img src={final} className="imgFinal" alt="React logo" />
        <h1 className='finalTitulo'>¡INVERTIR TU DINERO DEJÓ DE SER UN LUJO! AHORA ES NECESIDAD</h1>
      <center>
        <button className='botonFinal'>Inicia el reto</button>
      </center>
      </div>
      
    </>
  )
}

export default App
