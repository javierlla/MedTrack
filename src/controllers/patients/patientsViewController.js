import patientController from "./patientsController.js";

// preguntar
async function getAll(req, res) {

    try {

        const patients = await patientController.getAll();
        const role = req.ssesion.user?.role;


        if (role === "doctor") {
            res.render("patient/list", { patients, role });
        } else {
            res.render("layout", { error: "You are not a doctor" });
        }

    } catch (error) {

        console.error(error);

        res.render("layout", { error: "Internal Server Error" }); // vamos a la vista de layout y le mostramos el error
    }

}

async function getByID(req, res) {
    try {

        const id = req.params.id;
        const patient = await patientController.getByID(id);

        if (!patient) {
            res.render("layout", { error: "There is no patient for that ID" });
        }
        const role = req.ssesion.user?.role;

        if (role === "doctor") {
            res.render("patient/show", { patient }); // la ruta de render es a partir de la carpeta views, no la del router
        } else {
            res.render("layout", { error: "You are not a doctor" });
        }

    } catch (error) {

        console.error(error);

        res.render("layout", { error: "Internal Server Error" }); // vamos a la vista de layout y le mostramos el error

    }
}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const error = req.query.error;
        const patient = await patientController.getByID(id);

        if (!patient) {
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
    
            res.redirect("/patient/" + id);
            
        } catch (error) {
            if (error.statusCode){
                res.redirect(`/patient/${id}/edit?error=` + error.mesage);
            }else{
                res.render("layout", {error: "Internal Server Error"});
            }
        }
}



export default {
    getAll,
    getByID,
    editForm,
    edit
}