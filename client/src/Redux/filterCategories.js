export function filterCategories(category){
    return async function(dispatch){
        console.log('Ejecuntado FILTER_CATEGORIES: ',category)
        return dispatch({
            type:"FILTER_CATEGORIES",
            payload:category
        })
    }
}
