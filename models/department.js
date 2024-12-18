const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }, // Référence à l'employé manager
}, { timestamps: true });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
