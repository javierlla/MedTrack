import Appointment from '../../models/appointments.js';
import {  } from "../../utils/errors.js";


async function getAll(){

    const appointments = await Appointment.findAll();
   
    return appointments;

}
  
async function getByID(id){

    const appointments = await Appointment.findByPk(id);

    return appointments;

}

async function edit(id, data){ // suponemos que los datos que vamos a pasar a la función estan en el formato correcto

    if (data.name){
        
    }

    const result = await Appointment.update(
        data,
        {
            where:{
                user_id: id
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