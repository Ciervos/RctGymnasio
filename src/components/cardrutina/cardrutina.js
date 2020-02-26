import React,{useState, useEffect} from 'react';
import './cardrutina.scss';

const Cardrutina = () =>{

const rutina = [{
    dia: 1,
    tipo: "Espalda",
},
{
    dia: 2,
    tipo: "Espalda",
},
{   
    dia: 3,
    tipo: "Espalda",
}
,
{   
    dia: 4, 
    tipo: "Espalda",
},
{   
    dia: 5,
    tipo: "Espalda",
}]
return(
    
    <div className="cardrutina-contenedor-principal">

{rutina.map(card => {
        return (<div className="cardrutina-contenedor">
            <h1>Día: {card.dia}</h1>
        </div>);
      })}

    </div>
        );
    } 

export default Cardrutina  