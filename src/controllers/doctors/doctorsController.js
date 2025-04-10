import Doctor from '../../models/doctors.js';
import {  } from "../../utils/errors.js";


async function getAll(){

    const doctors = await Doctor.findAll();
   
    return doctors;

}
  
async function getByID(id){

    const doctor = await Doctor.findByPk(id);

    return doctor;

}

async function edit(id, data){ // suponemos que los datos que vamos a pasar a la función estan en el formato correcto

    if (data.name){
        
    }

    const result = await Doctor.update(
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