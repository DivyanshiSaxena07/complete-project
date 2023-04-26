const express = require("express");
 const teamRouter = require("../controller/teamController");
const router = express.Router();

 router.post("/addteam",teamRouter.addTeam);
 router.get("/Viewteam",teamRouter.viewTeam);



 module.exports = router;