import doctorController from './doctorsController.js';


async function getAll(req,res){

    try{

        const doctors = await doctorController.getAll();
        const role = req.ssesion.user?.role;
    
        res.render("doctor/list",{doctors, role});

    }catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }
    
}
  
async function getByID(req,res){

    try {

        const id = req.params.id;
        const doctor = await doctorController.getByID(id);

        if(!doctor){
            res.render("layout", {error: "There is no doctor for that ID"});
        }

        res.render("doctor/show",{doctor}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const doctor = await doctorController.getByID(id);

        if (!doctor) {
            res.redirect("/doctor")
        }

        res.render("doctor/edit", {doctor});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function edit(req, res){

    const id = req.params.id;

    try {

        const result = await doctorController.edit(id, req.body);

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