import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Room from "./rooms.js"

const Doctor = connection.define("doctors",{
    
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    surname: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    speciality: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    telephone: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
    },

    room_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
})


Doctor.hasOne(Room,{foreignKey:"room_id"});
Room.belongsTo(Doctor,{foreignKey:"room_id"});

export default Doctor;