import axios from "axios";

export function buscarName(name) {
    return async function (dispatch) {
        try {
            const responce = (await axios.get(`http://localhost:3001/nft/?name=${name}`)).data;
            console.log(responce);
            dispatch({
                type:'GET_GAMENAME',
                payload: responce
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
