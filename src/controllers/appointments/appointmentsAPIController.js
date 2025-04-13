import appointmentsController from './appointmentsController.js';

async function getAll(req,res){
    try {
        const role = req.session.user?.role;
        const id = req.session.user?.user_id;
        const appointments = await appointmentsController.getAll(id, role);
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Server Error"}); // Si falla la base de datos se detectará y se manada el mensaje
    }
}
  
async function getByID(req,res){

    try {

        const id = req.params.id;

        const appointments = await appointmentsController.getByID(id);

        res.json(appointments);

    } catch (error) {

        console.error(error);

        res.status(500).json({error: "Server Error"}); // Si falla la base de datos se detectará y se manada el mensaje
    }
    
}

async function edit(req, res){
    
    try {

        const id = req.params.id;

        const result = await appointmentsController.edit(id, req.body);

        res.json(result);
        
    } catch (error) {

        console.error(error);

        if (error.statusCode){
            res.status(error.statusCode).json({error: error.message});
        }else{
            res.status(500).json({error: "Server Error"}); // Si falla la base de datos se detectará y se manada el mensaje
        }
    }

}

export default{
    getAll,
    getByID,
    edit
};