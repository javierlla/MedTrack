import Prescription from "../../models/prescriptions.js";
import {  } from "../../utils/errors.js";


async function getAll(){
    const prescriptions = await Prescription.findAll();
    return prescriptions;
}

async function getByID (id){
    const prescription = await Prescription.findByPk(id);
    return prescription;
}

async function edit(id,data){
    if (data.name){
        
    }
    const result = await Prescription.update(
        data,
        {
            where:{
                prescription_id: id
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



