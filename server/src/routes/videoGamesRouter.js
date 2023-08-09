const { Router } = require('express');

const videoGamesRouter = Router();

const  {getAllVideogames, getIdVideoGames} = require ("../handlers/videoGamesHandlers")

videoGamesRouter.get("/", getAllVideogames )
videoGamesRouter.get("/:id",getIdVideoGames )

module.exports = videoGamesRouter;

