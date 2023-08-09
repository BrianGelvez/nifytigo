//import { useEffect } from "react";
import Card from "../Card/Card";
//import { getEjemplo } from "../../Redux/actios/getEjemplo";
//import { useDispatch, useSelector } from 'react-redux';

function Cards(ejemplo) {
  
  return (
    <div>
          <Card
            key={ejemplo.id}
            id={ejemplo.id}
            name={ejemplo.name}
            description={ejemplo.description}
            image={ejemplo.image}
            price={ejemplo.price}
            user={ejemplo.user}
            categories={ejemplo.categories}
          />
    </div>
  );
}

export default Cards;




/*import { useEffect } from "react"
import Card from "../Card/Card"
import { getEjemplo } from "../../Redux/actios/getEjemplo"
import { useDispatch, useSelector} from 'react-redux'
function Cards() {

  const dispatch = useDispatch()

  const ejemplos = useSelector((state) => state.ejemplo) 

  useEffect(()=>{
    dispatch(getEjemplo());
  }, [dispatch])

  return (
    <div>
      {ejemplos.map((ejemplo)=>{

        <Card
          key={ejemplo.id}
          id={ejemplo.id}
          name={ejemplo.name}
          image={ejemplo.image}
          description={ejemplo.description}
        />
      })
      }
    </div>
  )
}



export default Cards
*/