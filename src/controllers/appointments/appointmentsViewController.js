import appointmentsController from './appointmentsController.js';
import Doctor from '../../models/doctors.js';


async function getAll(req,res){
    try{
        const role = req.session.user?.role;
        const id = req.session.user?.user_id;
        const appointments = await appointmentsController.getAll(id,role);
        //res.json(appointments);
        res.render("appointment/list",{appointments, role});
    }catch (error) {
        console.error(error);
        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    } 
}

//FUNCTION TO GET AVAILABILITY
async function getAvailableAppointments(req,res){
    const patient_id = req.session.patient_id
    const result = {speciality: req.query.speciality,
                    day: req.query.day,
                    hour: req.query.hour
                   };
    let appointments = await appointmentsController.getAvailableAppointments(result.speciality,result.day,result.hour);

    if(appointments.length>0){
        appointments = await appointmentsController.getAvailableAppointments(result.speciality,result.day);
        appointments = appointments.map((appointment)=> {
            return new Date(appointment.date).toTimeString().split(' ')[0];
        })
        res.render("appointment/create", {error: "That hour is already used",appointments});
    }else{
        console.log("cita libre");
        const newDate = await appointmentsController.create(result.day,result.hour,result.speciality,patient_id);
        res.send("Cita reservada");
        res.redirect("/appointments");
    }
}
  
async function getByID(req,res){

    try {

        const id = req.params.id;
        const appointment = await appointmentsController.getByID(id);

        if(!appointment){
            res.render("layout", {error: "There is no appointment for that ID"});
        }

        res.render("appointment/show",{appointment}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const appointment = await appointmentsController.getByID(id);

        if (!appointment) {
            res.redirect("/appointment")
        }

        res.render("appointment/edit", {appointment});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function createForm(req, res){

    try {

        res.render("appointment/create");
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function edit(req, res){

    const id = req.params.id;

    try {

        const result = await appointmentsController.edit(id, req.body);

        res.redirect("/appointment/" + id);
        
    } catch (error) {
        if (error.statusCode){
            res.redirect(`/appointment/${id}/edit?error=` + error.mesage);
        }else{
            res.render("layout", {error: "Internal Server Error"});
        }
    }

}

export default{
    getAll,
    getAvailableAppointments,
    getByID,
    edit,
    createForm,
    editForm
}