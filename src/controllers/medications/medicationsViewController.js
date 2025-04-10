import medicationsController from './medicationsController.js';


async function getAll(req,res){

    try{

        const medications = await medicationsController.getAll();
        const role = req.ssesion.user?.role;
    
        res.render("medication/list",{medications, role});

    }catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }
    
}
  
async function getByID(req,res){

    try {

        const id = req.params.id;
        const medication = await medicationsController.getByID(id);

        if(!medication){
            res.render("layout", {error: "There is no medication for that ID"});
        }

        res.render("medication/show",{medication}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const medication = await medicationsController.getByID(id);

        if (!medication) {
            res.redirect("/medication")
        }

        res.render("medication/edit", {medication});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function edit(req, res){

    const id = req.params.id;

    try {

        const result = await medicationsController.edit(id, req.body);

        res.redirect("/medication/" + id);
        
    } catch (error) {
        if (error.statusCode){
            res.redirect(`/medication/${id}/edit?error=` + error.mesage);
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