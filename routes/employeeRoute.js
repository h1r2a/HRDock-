const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Route POST pour créer un employé
router.post("/", employeeController.createEmployee);

module.exports = router;
