import './App.css';
import Luces from './luces';
import React, { useState } from 'react';


function App() {
  const coloresSemaforo = ["red", "yellow", "green"]; 
  const [encendido, setEncendido] = useState ("green");          // Creo una constante con una cadena de objetos
                                                         //donde meto los colores del semaforo
  return (
    <div className="App">

      {coloresSemaforo.map((color => {    
        return(<Luces color={color} encendido={encendido} setEncendido = {setEncendido}/>)    
                                          
      }
        ))}
      
    </div>
  );
}

export default App;
