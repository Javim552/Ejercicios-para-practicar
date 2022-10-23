import React from "react";

const Luces = ({color,encendido,setEncendido})=> {
                                        
    return(                             
        <div>
            <div className="luces" style = {{backgroundColor:color === encendido ? color:"grey"}} 
            onClick = {() => setEncendido(color)}></div>
            
            
        </div>
       
    )

}// En esta funcion entrará color, encendido y setEncendido. Cogeremos el click del raton con un onClick
 
export default Luces;