import { DataTypes } from "sequelize";
import connection from "../config/db.js";

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

export default Room;