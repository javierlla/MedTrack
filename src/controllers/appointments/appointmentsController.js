import Appointment from '../../models/appointments.js';
import Doctor from '../../models/doctors.js';
import Patient from '../../models/patients.js';
import {  } from "../../utils/errors.js";

//FUNCTION TO GET ENTIRE LIST
async function getAll(id=null,role=null){
    const filter = {include: [Patient,Doctor]};
    if(role==="patient"){
        filter.where = {patient_id: id};
    }else if (role==="doctor"){
        filter.where = {doctor_id: id};
    }
    const appointments = await Appointment.findAll(filter);
    return appointments;
}

//FUNCTION TO GET APPOINTMENT BY ID
async function getByID(id){
    const appointments = await Appointment.findByPk(id);
    return appointments;
}

//FUNCTION TO CREATE AN APPOINTMENT
async function create(data){
    const result = await Appointment.create(
        data,
        {
            where:{
                appointment_id: id
            }
        }
    );
    return result;
}

//FUNCTION TO EDIT AN APPOINTMENT
async function edit(id, data){
    const result = await Appointment.update(
        data,
        {
            where:{
                appointment_id: id
            }
        }
    );
    return result;
}

//FUNCTION TO REMOVE AN APPOINTMENT
async function remove(id){
    const result = await Appointment.findByPk(id);
    result.destroy();
}

export default{
    getAll,
    getByID,
    edit,
    remove
}