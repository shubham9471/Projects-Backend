const express = require('express');
const router = express.Router();


const cryptoController= require("../controllers/cryptocurrency")


router.get("/crypto", cryptoController.Crypto)

module.exports = router;