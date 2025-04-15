import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Appointment from "./appointments.js";
import Medication from "./medications.js";

const Prescription = connection.define("prescriptions",{
    prescription_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    appointment_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
})

Prescription.belongsToMany(Medication,{through:"medications_prescriptions",foreignKey:"prescription_id"});
Medication.belongsToMany(Prescription,{through:"medications_prescriptions",foreignKey:"medication_id"});

export default Prescription;