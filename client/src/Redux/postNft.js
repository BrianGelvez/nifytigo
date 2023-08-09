import axios from "axios"
 import { POST_NFT } from "./actionTypes"

 export const postNft = (formData)=> {
    return async function (dispatch){
        const response = await axios.post(`http://localhost:3001/nft/create`,formData)

        
    }
 }
 