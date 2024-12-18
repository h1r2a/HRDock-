const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Référence à l'utilisateur
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  role: { type: String, required: true },  // 'User' or 'Admin'
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },  // Référence au département
  hireDate: { type: Date, required: true },
  salary: { type: Number, required: true },  // Salaire de base
  profilePicture: { type: String },
  isActive: { type: Boolean, default: true }, // true or false
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
