import Medication from '../../models/medications.js';
import {  } from "../../utils/errors.js";


async function getAll(){

    const medications = await Medication.findAll();
   
    return medications;

}
  
async function getByID(id){

    const medication = await Medication.findByPk(id);

    return medication;

}

async function edit(id, data){ // suponemos que los datos que vamos a pasar a la función estan en el formato correcto

    if (data.name){
        
    }

    const result = await Medication.update(
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