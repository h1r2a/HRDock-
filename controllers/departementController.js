const Department = require("../models/department");

const departementController = {
    // Créer un département
    createDepartment: async (req, res) => {
        try {
            const { name, description, managerId } = req.body;

            // Vérification des champs requis
            if (!name) {
                return res.status(400).json({ error: "The name field is required." });
            }

            // Création du département
            const newDepartment = new Department({ name, description, managerId });
            const savedDepartment = await newDepartment.save();

            res.status(201).json({
                message: "Department created successfully.",
                department: savedDepartment
            });
        } catch (error) {
            console.error("Error creating department:", error);
            res.status(500).json({ error: "An error occurred while creating the department." });
        }
    },

    // Lire tous les départements
    getAllDepartments: async (req, res) => {
        try {
            const departments = await Department.find().populate("managerId", "firstName lastName email");
            res.status(200).json(departments);
        } catch (error) {
            console.error("Error fetching departments:", error);
            res.status(500).json({ error: "An error occurred while fetching the departments." });
        }
    },

    // Lire un seul département par ID
    getDepartmentById: async (req, res) => {
        try {
            const { id } = req.params;
            const department = await Department.findById(id).populate("managerId", "firstName lastName email");

            if (!department) {
                return res.status(404).json({ error: "Department not found." });
            }

            res.status(200).json(department);
        } catch (error) {
            console.error("Error fetching department:", error);
            res.status(500).json({ error: "An error occurred while fetching the department." });
        }
    },

    // Mettre à jour un département
    updateDepartment: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, managerId } = req.body;

            const updatedDepartment = await Department.findByIdAndUpdate(
                id,
                { name, description, managerId },
                { new: true, runValidators: true } // Retourne le document mis à jour
            );

            if (!updatedDepartment) {
                return res.status(404).json({ error: "Department not found." });
            }

            res.status(200).json({
                message: "Department updated successfully.",
                department: updatedDepartment
            });
        } catch (error) {
            console.error("Error updating department:", error);
            res.status(500).json({ error: "An error occurred while updating the department." });
        }
    },

    // Supprimer un département
    deleteDepartment: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedDepartment = await Department.findByIdAndDelete(id);

            if (!deletedDepartment) {
                return res.status(404).json({ error: "Department not found." });
            }

            res.status(200).json({
                message: "Department deleted successfully.",
                department: deletedDepartment
            });
        } catch (error) {
            console.error("Error deleting department:", error);
            res.status(500).json({ error: "An error occurred while deleting the department." });
        }
    }
};

module.exports = departementController;
