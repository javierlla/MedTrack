import patientController from './patientsController.js';


async function getAll(req,res){

    try{

        const patients = await patientController.getAll();
        const role = req.ssesion.user?.role;
    
        res.render("patient/list",{patients, role});

    }catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }
    
}

async function getByID(req,res){

    try {

        const id = req.params.id;
        const patient = await patientController.getByID(id);

        if(!patient){
            res.render("layout", {error: "There is no doctor for that ID"});
        }

        res.render("patient/show",{patient}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error

    }

}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const error = req.query.error;
        const doctor = await patientController.getByID(id);

        if (!doctor) {
            res.redirect("/patient")
        }

        res.render("patient/edit", {patient, error});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function edit(req, res){

    const id = req.params.id;

    try {

        const result = await patientController.edit(id, req.body);

        res.redirect("/doctor/" + id);
        
    } catch (error) {
        if (error.statusCode){
            res.redirect(`/doctor/${id}/edit?error=` + error.mesage);
        }else{
            res.render("layout", {error: "Internal Server Error"});
        }
    }

}

export default{
    getAll,
    getByID,
    edit,
    editForm
}