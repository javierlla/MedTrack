import prescriptionsController from './prescriptionsController.js';


async function getAll(req,res){

    try{
        const role = req.session.user?.role;
        const id = req.session.user?.user_id;
        const prescriptions = await prescriptionsController.getAll(id, role);
        //res.json(prescriptions);
        res.render("prescription/list",{prescriptions, role});

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

        res.render("prescription/show",{prescription}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const prescription = await prescriptionsController.getByID(id);

        if (!prescription) {
           return res.redirect("/prescription")
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
    editForm
}