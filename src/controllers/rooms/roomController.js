import Room from "../../models/rooms.js";
import {  } from "../../utils/errors.js";


async function getAll(){
    const rooms = await Room.findAll();
    return rooms;
}

async function getByID (id){
    const room = await Room.findByPk(id);
    return room;
}

async function edit(id,data){
    if (data.name){
        
    }
    const result = await Room.update(
        data,
        {
            where:{
                room_id: id
            }
        }
    );
    return result;
}


export default{
    getAll,
    getByID,
    edit
}



