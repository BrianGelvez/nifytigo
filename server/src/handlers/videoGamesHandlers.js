

const {allVideoGames, idGames} = require("../controllers/videoGamesController")

const getAllVideogames = async (req, res) => {
    try {
      const videoGames = await allVideoGames();
      res.status(200).json(videoGames);
    } catch (error) {
        res.status(404).json({ error: "Error al obtener los videojuegos" });
    }
  };
const getIdVideoGames = async (req, res)=>{
  const { id } = req.params;
  try {
    const gameData = await idGames(id);
    res.status(200).json(gameData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
module.exports = {getAllVideogames, getIdVideoGames}