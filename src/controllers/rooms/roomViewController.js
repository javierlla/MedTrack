import roomController from './roomController.js';


async function getAll(req,res){

    try{

        const rooms = await roomController.getAll();
        const role = req.session.user?.role;
    
        res.render("room/list",{rooms, role});

    }catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }
    
}

async function getByID(req,res){

    try {

        const id = req.params.id;
        const room = await roomController.getByID(id);

        if(!room){
           return res.render("layout", {error: "There is no room for that ID"});
        }

        res.render("room/show",{room}); // la ruta de render es a partir de la carpeta views, no la del router
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function editForm(req, res){

    try {

        const id = req.params.id;
        const room = await roomController.getByID(id);

        if (!room) {
           return res.redirect("/room")
        }

        res.render("room/edit", {room});
        
    } catch (error) {

        console.error(error);

        res.render("layout", {error: "Internal Server Error"}); // vamos a la vista de layout y le mostramos el error
    }

}

async function edit(req, res){

    const id = req.params.id;

    try {

        const result = await roomController.edit(id, req.body);

        res.redirect("/room/" + id);
        
    } catch (error) {
        if (error.statusCode){
            res.redirect(`/room/${id}/edit?error=` + error.message);
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