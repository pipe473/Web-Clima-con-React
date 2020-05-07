import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'

function App () {
  // State del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({})

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = 'bf7885ab83105609195dce3b4c23b5e6'
        const url = `http://api.openweathermap.org/data/2.5/weather/?q=${ciudad},${pais}&
      appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
      }
      
    }
    consultarAPI();
    
  },[consultar]);

  return (
    <Fragment>
      <Header titulo='Clima React App' />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className='col m6 s12'>
              <Clima />  
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
