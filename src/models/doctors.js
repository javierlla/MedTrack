import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import User from "./users.js"
import Appointment from "./appointments.js"
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

Doctor.belongsTo(User,{foreignKey:"user_id"});
User.hasOne(Doctor,{foreignKey:"user_id"});

Appointment.belongsTo(Doctor,{foreignKey:"doctor_id"});
Doctor.hasMany(Appointment,{foreignKey:"doctor_id"});

Doctor.hasOne(Room,{foreignKey:"room_id"});
Room.belongsTo(Doctor,{foreignKey:"room_id"});

export default Doctor;