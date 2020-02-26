import React,{useState, useEffect} from 'react';
import './contenedor.scss';
import Cardrutina from '../cardrutina/cardrutina';

const Contenedor = () =>{
return(
    <div className="contenedor-principal">
<h1>Rutinas de gymnasio</h1>
<Cardrutina></Cardrutina>
    </div>
        );
    } 

export default Contenedor    