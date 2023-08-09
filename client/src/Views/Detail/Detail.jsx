//falta que se haga el la subida del back

import { useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import  "./Detail.css"

export default function Detail() {


    const { id } = useParams();
    const [gameID, setGameID] = useState({})
    useEffect(() => {
        axios(`http://localhost:3001/nft/${id}`).then(({ data }) => {
           if (data.name) {
            setGameID(data);
           } else {
              alert('No hay personajes con ese ID');
           }
        });
        return setGameID({});
     }, [id]);

return (

<div className="detail">
    
   <img src={gameID.image} alt="" /> 
  <div className="detail__content">
    <p className="detail__title"> {gameID.name}</p>
    <p className="detail__description">{gameID.description}</p>
    <p>
        
     {gameID.categories && gameID.categories.length > 0 ? gameID.categories.map(category => category.name).join(", ") : "Sin categorías disponibles"}
    </p>
    <button className="detail__button">{gameID.price}</button>
  </div>
</div>

    );
}
/*
 */