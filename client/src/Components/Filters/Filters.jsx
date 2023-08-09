import './Filters_Styles.css'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sortAlfa } from '../../Redux/sortAlfa'; 
import { getCategories } from '../../Redux/getCategories';
import { filterCategories } from '../../Redux/filterCategories';
import { useState } from 'react';



function Filters({paginate}){


    const[selectedCategorie, setselectedCategorie]=useState("");
    const[aux, setAux] = useState(false);

    const categories = useSelector((state)=> state.categories);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
    },[dispatch]);


    const handleFilterByCollection=(e)=>{
        
    }
    const handleSort=(e)=>{
        dispatch(sortAlfa(e.target.value))
        paginate(1);
    }
    const handleFilterByCategory=(e)=>{
        dispatch(filterCategories(e.target.value))
        paginate(1);
    }


    return(
        <div id='filterContainer'>
            <div className='filterNames'>
                <label>Filters</label>
            </div>  

            {/* <div className='filtersBox'>
                <label>COLLECTION: </label>
                <select onChange={handleFilterByCollection}>
                    {["A","B","C"].map((origin) => (
                        <option key={origin} value={origin}>
                            {origin}
                        </option>
                    ))}
                </select>
            </div> */}

            <div className='filtersBox'>
                <label>Sort: </label>
                <select className='selector' onChange={handleSort}>
                    {["A-Z","Z-A","Price (Higher First)","Price (Lower First)"].map((sort) => (
                        <option key={sort} value={sort}>
                            {sort}
                        </option>
                    ))}
                </select>
            </div>

            <div className='filtersBox' id='genresFilterBox'>
                <label>Category: </label>
                <select className='selector' onChange={handleFilterByCategory}>
                    {categories.map((gender) => (
                        <option key={gender.name} value={gender.name}>
                            {gender.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Filters;