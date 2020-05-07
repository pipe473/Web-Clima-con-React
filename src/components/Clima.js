import React from 'react'


const Clima = ({resultado}) => {

    // Extraer los valores
    const { name, main } = resultado;

    if (!name) return null;     

    // Grados Kelvin
    const kelvin =273.15;
    
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {main.temp-kelvin}
                </p>
            </div>
        </div>
     );
}
 
export default Clima;