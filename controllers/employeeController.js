const Employee = require("../models/employee");

const employeeController = {
    createEmployee: async (req, res) => {
        try {
            const {
                firstName,
                lastName,
                email,
                phone,
                role,
                department,
                hireDate,
                salary
            } = req.body;

            // Validation des champs obligatoires
            if (!firstName || !lastName || !email || !role || !hireDate || !salary) {
                return res.status(400).json({ error: "All required fields must be provided." });
            }

            // Vérifier si un employé avec le même email existe déjà
            const existingEmployee = await Employee.findOne({ email });
            if (existingEmployee) {
                return res.status(400).json({ error: "An employee with this email already exists." });
            }

            // Création de l'employé sans userId ni profilePicture
            const newEmployee = new Employee({
                firstName,
                lastName,
                email,
                phone,
                role,
                department,
                hireDate,
                salary
            });

            // Sauvegarder dans la base de données
            const savedEmployee = await newEmployee.save();

            // Répondre avec l'employé créé
            res.status(201).json({
                message: "Employee created successfully.",
                employee: savedEmployee
            });
        } catch (error) {
            console.error("Error creating employee:", error);
            res.status(500).json({ error: "An error occurred while creating the employee." });
        }
    },
};

module.exports = employeeController;
