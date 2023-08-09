import './Pagination_style.css';


const Pagination=({cardsPerPage,totalCards,currentPage,paginate})=>{
    const pageNumbers = [];
    
for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className='Pagination'>
            {pageNumbers.map((number)=>(
                <li key={number} className='pageItem' 
                onClick={(e)=>{
                    e.preventDefault();
                    paginate(number);
                }}
                href='!#'
                >
                    {number}
                </li>
            ))}
            </ul>
        </nav>
    )
}
export default Pagination;