const express = require("express");
const router = express.Router();
const departementController = require("../controllers/departementController");

// Créer un département
router.post("/", departementController.createDepartment);

// Lire tous les départements
router.get("/", departementController.getAllDepartments);

// Lire un département par ID
router.get("/:id", departementController.getDepartmentById);

// Mettre à jour un département
router.put("/:id", departementController.updateDepartment);

// Supprimer un département
router.delete("/:id", departementController.deleteDepartment);

module.exports = router;
