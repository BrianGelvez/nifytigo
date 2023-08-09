import { NavLink } from "react-router-dom"
import "./Card.css"

function Card(ejemplo) {
  return (
    <div>
      {/*${nft.id}
      <h1>id: {ejemplo.id}</h1> */}
        <NavLink to={`/detail/${ejemplo.id}`}>
        
<div className="card">
  <div className="content">
    <div className="back">
      <div className="back-content">
       
      <div>
          <img src={ejemplo.image}/>
        </div>
        
      </div>
    </div>
    <div className="front">
      
      <div className="img">
        <div className="circle">
        </div>
        <div className="circle" id="right">
        </div>
        <div className="circle" id="bottom">
        </div>
      </div>

      <div className="front-content">
         <h1></h1>{ejemplo.name} 
        <div className="description">
        <div className="description">
          <div className="title">
        <p>  {ejemplo.price}</p> 
          </div>
          <p className="card-footer">
            
          </p>
        </div>
      </div>
    </div>
  </div>
</div> 
</div>
      
     
        
     
        </NavLink>
        
    </div>
  )
}



export default Card



/*  <h3>{ejemplo.name}</h3>
        <div>
          <img src={ejemplo.image}/>
        </div>
        <h2>PRICE: {ejemplo.price}</h2>
      */