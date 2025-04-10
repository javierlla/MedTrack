import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Doctor from "./doctors.js";

const Room = connection.define("rooms",{
    room_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
})

Room.hasOne(Doctor, { foreignKey: 'room_id' });
Doctor.belongsTo(Room, { foreignKey: 'room_id' });

export default Room;