const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }, // Référence à l'employé
  date: { type: Date, required: true }, // Date de l'attendance
  checkIn: { type: Date, required: true }, // Heure d'arrivée
  checkOut: { type: Date }, // Heure de départ (facultatif)
  status: { 
    type: String, 
    enum: ['Present', 'Absent', 'Late'], 
    default: 'Present', 
    required: true 
  }, // Statut de l'attendance (présence, absence, retard)
  reason: { type: String }, // Raison de l'absence (facultatif)
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
