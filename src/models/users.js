import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Doctor from "./doctors.js"
import Patient from "./patients.js"

const User = connection.define("users",{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
})

User.hasOne(Doctor, { foreignKey: 'user_id' });
Doctor.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Patient, { foreignKey: 'user_id' });
Patient.belongsTo(User, { foreignKey: 'user_id' });


export default User;