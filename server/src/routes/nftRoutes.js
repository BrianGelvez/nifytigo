const { Router } = require("express");

const router = Router();

const { getNftHandler,postNftHandler, nftbyID, deleteNftHandler, updateNftHandler }= require('../handlers/nftHandler')


router
.get('/', getNftHandler)
.post('/create', postNftHandler)
.get("/:id", nftbyID)
.delete('/delete/:id', deleteNftHandler)
.put('/update/:id', updateNftHandler)


module.exports = router;
