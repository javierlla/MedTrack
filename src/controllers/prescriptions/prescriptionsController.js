import Prescription from "../../models/prescriptions.js";
import Doctor from '../../models/doctors.js';
import Patient from '../../models/patients.js';
import Medication from '../../models/medications.js';
import Appointment from '../../models/appointments.js';
import {  } from "../../utils/errors.js";

//FUNCTION TO GET ENTIRE LIST
async function getAll(id=null,role=null){
    const filter = {include: [Patient,Doctor,{model: Prescription, include: Medication}]};
    if(role==="patient"){
        filter.where = {patient_id: id};
    }else if (role==="doctor"){
        filter.where = {doctor_id: id};
    }
    const prescriptions = await Appointment.findAll(filter);
    return prescriptions;
}

//FUNCTION TO GET PRESCRIPTION BY ID
async function getByID (id){
    const prescription = await Prescription.findByPk(id);
    return prescription;
}

//FUNCTION TO CREATE A PRESCRIPTION
async function create(appointment_id, medication){
    
    const [prescription, created] = await Prescription.findOrCreate(
        {where: {appointment_id: appointment_id},
        defaults:{appointment_id: appointment_id}
    }
    );

    const hasRelation = await prescription.hasMedication(medication);
    console.log("relation", hasRelation);
    if (!hasRelation) {
        await prescription.addMedication(medication);
    }
    //prescription.addMedication(medication);

    return prescription;
}

//FUNCTION TO EDIT A PRESCRIPTION
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

//FUNCTION TO REMOVE A PRESCIPTION
async function remove(id){
    const result = await Prescription.findByPk(id);
    result.destroy();
}

export default{
    getAll,
    getByID,
    edit,
    create,
    remove
}



