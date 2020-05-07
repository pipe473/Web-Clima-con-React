import React from 'react'


const Clima = ({resultado}) => {

    // Extraer los valores
    const { name, main } = resultado;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                    {main.temp}
                </p>
            </div>
        </div>
     );
}
 
export default Clima;