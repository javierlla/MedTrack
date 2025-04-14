import Appointment from '../../models/appointments.js';
import Doctor from '../../models/doctors.js';
import Patient from '../../models/patients.js';
import {  } from "../../utils/errors.js";
import {Op} from "sequelize";

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

//FUNCTION TO GET AVAILABILITY
async function getAvailableAppointments(speciality=null,day=null,hour=null){
    let appointments = [];
    const filter = {include: {model: Doctor, where: {speciality: speciality}}};
    filter.where = {date: {[Op.like]: day+" "+hour}};
    if(!hour){
        const dayInit = new Date(`${day}T00:00:00`);
        const dayEnd = new Date(`${day}T23:59:59`);
        filter.where = {date: {[Op.between]: [dayInit,dayEnd]}};
        appointments = await Appointment.findAll(filter);
    }else{
        appointments = await Appointment.findAll(filter);
    }
        
    return appointments;
}

//FUNCTION TO GET APPOINTMENT BY ID
async function getByID(id){
    const appointments = await Appointment.findByPk(id);
    return appointments;
}

//FUNCTION TO CREATE AN APPOINTMENT
async function create(day=null,hour=null,speciality=null,id){
    const doctor = await Doctor.findOne({ where: { speciality: speciality } });
    const date = new Date(`${day}T${hour}`);
    const patient_id = id;

    const result = await Appointment.create({
        date,
        doctor_id: doctor.doctor_id,
        patient_id:patient_id
    });

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
    getAvailableAppointments,
    getByID,
    edit,
    create,
    remove
}