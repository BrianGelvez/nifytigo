
export function sortAlfa(alfaOrder){
    return async function(dispatch){
        console.log('sortAlfa:',alfaOrder);
        return dispatch({
            type:"SORT_ALFA",
            payload:alfaOrder
        })
    }
}