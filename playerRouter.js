const express = require("express");
const playerController = require("../controller/playercontroller");
const router = express.Router();

 router.post("/addPlayer",playerController.addPlayer);
 router.get("/viewPlayer",playerController.ViewPlayer);
 router.post("/updatePlayer",playerController.updatePlayer);
 router.delete("/deletePlayer",playerController.deletePlayer);



 module.exports = router;