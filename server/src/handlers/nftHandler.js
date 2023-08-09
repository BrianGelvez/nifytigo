const { allNft, createNft, deleteNft, updateNftDescription, getNftById } = require('../controllers/nftController')


const getNftHandler = async (req, res) => {

    const { name } = req.query;

    try {
        if (name) {
            console.log(name);
            const nfts = await allNft(name);
            return res.status(200).json(nfts)
        }
        const nfts = await allNft();
        res.status(200).json(nfts)

    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}

const postNftHandler = async (req, res) => {

    const { iduser, name, description, image, price, categorie } = req.body;

    try {
        const response = await createNft(iduser, name, description, image, price, categorie);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const nftbyID = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const nft = await getNftById(id);
        res.status(200).json(nft);
    } catch (e) {
        console.log(e);
        return res.status(500).send(e.message)
    }
}

const updateNftHandler = async (req, res) => {

    const { description } = req.body;
    const { id } = req.params;

    try {
        const response = await updateNftDescription(id, description);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const deleteNftHandler = async (req, res) => {

    const { id } = req.params;

    try {
        const response = await deleteNft(id, description);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    getNftHandler,
    postNftHandler,
    deleteNftHandler,
    updateNftHandler,
    nftbyID
}
