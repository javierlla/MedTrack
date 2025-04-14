import prescriptionsController from './prescriptionsController.js';
import Medication from '../../models/medications.js';
import Appointment from '../../models/appointments.js';
import Patient from '../../models/patients.js'

async function getAll(req,res){

    try{
        const role = req.session.user?.role;
        const id = req.session.user?.user_id;
        const appointments = await prescriptionsController.getAll(id, role);
        //res.json(prescriptions);
        res.render("prescription/list",{appointments, role});

    }catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }
    
}

async function getByID(req,res){

    try {

        const id = req.params.id;
        const prescription = await prescriptionsController.getByID(id);

        if(!prescription){
           return res.render("layout", {error: "There is no prescription for that ID"});
        }

        res.render("prescription/show",{prescription});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function createForm(req, res) {
    
    try {
        const filter ={include: Patient};
        const error = req.query.error;
        const id = req.session.user?.user_id;
        filter.where = {doctor_id: id};

        const appointments = await Appointment.findAll(filter);
        const medications = await Medication.findAll();

        res.render("prescription/create", { appointments, medications, error });

    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function create(req, res) {
    try {
        const response = await prescriptionsController.create(req.body.appointment_id, req.body.medication_id);
        res.redirect("/prescriptions");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect("/prescriptions/create?error=" + error.message)
        } else {
            res.redirect("/prescriptions/create?error=Internal+server+error")
        }
    }
}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const prescription = await prescriptionsController.getByID(id);

        if (!prescription) {
           return res.redirect("/prescriptions")
        }

        res.render("prescription/edit", {prescription});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function edit(req, res){

    const id = req.params.id;

    try {

        const result = await prescriptionsController.edit(id, req.body);

        res.redirect("/prescription/" + id);
        
    } catch (error) {
        if (error.statusCode){
            res.redirect(`/prescription/${id}/edit?error=` + error.message);
        }else{
            res.render("layout", {error: "Internal Server Error"});
        }
    }

}

export default{
    getAll,
    getByID,
    edit,
    editForm,
    create,
    createForm
}