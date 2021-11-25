const express = require('express');
const router = express.Router();

const cowinController= require("../controllers/cowinController")
const tempController= require("../controllers/TempertureController")

router.get("/cowin/states", cowinController.getStatesList)
router.get("/cowin/districts/:stateId", cowinController.getDistrictsList)
router.get("/cowin/centers", cowinController.getByPin)
router.post("/cowin/getOtp", cowinController.getOtp)


router.get("/london/londontemp", tempController.LondonWeather)

router.get("/london", tempController.LondonCitytemp)

router.get("/sortCityByTemp", tempController.sortCityByTemp)

module.exports = router;