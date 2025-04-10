import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Prescription from "./prescriptions.js"

const Medication = connection.define("medications",{
    medication_id: {
        type: DataTypes.INTEGER().UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.VARCHAR(45),
        allowNull: false
    },
})


export default Medication;
