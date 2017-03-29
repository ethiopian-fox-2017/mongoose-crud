const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customers_controller")

router.post("/", customerController.addCustomer)
router.get("/", customerController.dataCustomer)
router.post("/update/:id", customerController.updateCustomer)
router.get("/remove/:id", customerController.removeCustomer)

module.exports = router
