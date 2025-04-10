import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Patient from "./patients.js";
import Doctor from "./doctors.js";
import Prescription from "./prescriptions.js"

const Appointment = connection.define("appointments",{
    appointment_id: {
        type: DataTypes.INTEGER().UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    date: {
        type: DataTypes.DATETIME,
        allowNull: false
    },
    patient_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    doctor_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    }
})

Doctor.hasMany(Appointment,{foreignKey:"doctor_id"});
Appointment.belongsTo(Doctor);

Patient.hasMany(Appointment,{foreignKey:"patient_id"});
Appointment.belongsTo(Patient);

Appointment.hasOne(Prescription,{foreignKey:"appointment_id"});
Prescription.belongsTo(Appointment);

export default Appointment;
