import { DataTypes } from "sequelize";
import connection from "../config/db.js";
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
        type: DataTypes.DATE,
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
Appointment.belongsTo(Doctor,{foreignKey:"doctor_id"});

Patient.hasMany(Appointment,{foreignKey:"patient_id"});
Appointment.belongsTo(Patient,{foreignKey:"patient_id"});

Appointment.hasOne(Prescription,{foreignKey:"appointment_id"});
Prescription.belongsTo(Appointment,{foreignKey:"appointment_id"});

export default Appointment;
