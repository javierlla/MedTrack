import patientModel from "../../models/patients.js";
import {  } from "../../utils/errors.js";


async function getAll(){
    const patientModels = await patientModel.findAll();
    return patientModels;
}

async function getByID (id){
    const patientModel = await patientModel.findByPk(id);
    return patientModel;
}

async function edit(id,data){
    if (data.name){
        
    }
    const result = await patientModel.update(
        data,
        {
            where:{
                user_id: id
            }
        }
    );
    return result;
}

async function create(data){
    if (!data.name) {
        throw new PatientNameNotProvided();
    }
    if (!data.surname) {
        throw new PatientSurnameNotProvided();
    }
    if (!data.birthdate) {
        throw new PatientBirthdateNotProvided()
    }
    if (!data.ssn) {
        throw new PatientSsnNotProvided();
    }
    if (!data.telephone) {
        throw new PatientTelephoneNotProvided();
    }
    const response = await patientModel.create(data);
    return response;
}

//TODO
async function remove(id){
    const response = await patientModel.destroy({
        where: {
            user_id: id
        }
    })
}

export default{
    getAll,
    getByID,
    edit,
    create
}