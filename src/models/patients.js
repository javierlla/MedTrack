import { DataTypes } from "sequelize";
import connection from "../config/db.js";

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
        type: DataTypes.DATE,
        allowNull: false
    },
    ssn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true,
    }
})


export default Patient;
