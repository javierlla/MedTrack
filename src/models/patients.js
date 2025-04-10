import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Patient = connection.define("patients",{
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATETIME,
        allowNull: false
    },
    ssn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telephone: {
        type: DataTypes.VARCHAR(45),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true,
    }
})

Patient.belongsTo(User,{foreignKey:"user_id"});
User.hasOne(Patient,{foreignKey:"user_id"});

Patient.hasMany(Appointment,{foreignKey:"user_id"});
Appointment.belongsTo(Patient);

export default Patient;
