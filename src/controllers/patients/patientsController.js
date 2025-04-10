import Patient from "../../models/patients.js";
import {  } from "../../utils/errors.js";


async function getAll(){
    const patients = await Patient.findAll();
    return patients;
}

async function getByID (id){
    const patient = await Patient.findByPk(id);
    return patient;
}

async function edit(id,data){
    if (data.name){
        
    }
    const result = await Patient.update(
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