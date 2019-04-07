'use strict'

const express = require('express');

const router = express.Router();

const controller = require("../controllers/categoria-controller");

let _ctlr = new controller();

router.get('/',_ctlr.get);
router.get('/:id',_ctlr.getById);
router.put('/:id',_ctlr.put);
router.delete('/:id',_ctlr.delete);
router.post('/',_ctlr.post);


module.exports = router;