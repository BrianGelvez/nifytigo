import './home_styles.css';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Cards from "../../Components/Cards/Cards";
import { getEjemplo } from "../../Redux/getEjemplo"
// import NavBar from '../../Components/NavBar/NavBar';
import Filters from '../../Components/Filters/Filters';
// import videoBackground from '../../assets/background_video/Waves.webm'
import Pagination from '../../Components/Pagination/Pagination'
import Loader from '../../Components/Loader/Loader';

function Home(){
 const dispatch = useDispatch()
 
const ejemplo = useSelector((state) => state.ejemplo)   //Seguimiento al estado global

 const [currentPage, setCurrentPage] = useState(1);

 const [isLoading,setIsLoading] = useState(true);
 const [videogamesPerPage] = useState(8);

 const lastIndex = currentPage * videogamesPerPage; 
 const firstIndex = lastIndex - videogamesPerPage;

 const currentEjemplo= ejemplo.slice(firstIndex, lastIndex);
 //EL SLICE 
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

 useEffect(()=>{
    dispatch(getEjemplo())
    setTimeout(() => {          //Loader
        setIsLoading(false);
      }, 500); //
    }, [dispatch]);

    return (
        <div id='Homes'>
       <div id='HomeContainer'>
            <Filters paginate={paginate}></Filters>
            <Pagination cardsPerPage={videogamesPerPage} paginate={paginate} totalCards={ejemplo.length}></Pagination>
        <div id="cards">
        
        {currentEjemplo?.map((eje) =>{
          return(
                <Cards
                key={eje.id}
                id={eje.id}
                name={eje.name}
                description={eje.description}
                image={eje.image}
                price={eje.price}
                user={eje.user}
                categories={eje.categories}
                />
          )
          })}
        { isLoading && <Loader></Loader> }
        { isLoading && <div className='loaderBack'/>}
        </div>
        </div>
        <Pagination cardsPerPage={videogamesPerPage} paginate={paginate} totalCards={ejemplo.length}></Pagination>
        </div>
        
    );
}
export default Home;
