import prescriptionsController from './prescriptionsController.js';

async function getAll(req,res){
    
    try {

        const prescriptions = await prescriptionsController.getAll();

        res.json(prescriptions);
        
    } catch (error) {

        console.error(error);

        res.status(500).json({error: "Server Error"}); // Si falla la base de datos se detectará y se manada el mensaje
    }
    
}
  
async function getByID(req,res){

    try {

        const id = req.params.id;

        const prescription = await prescriptionsController.getByID(id);

        res.json(prescription);

    } catch (error) {

        console.error(error);

        res.status(500).json({error: "Server Error"}); // Si falla la base de datos se detectará y se manada el mensaje
    }
    
}

async function edit(req, res){
    
    try {

        const id = req.params.id;

        const result = await prescriptionsController.edit(id, req.body);

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