import patientController from "./patientsController.js";

async function getAll (req,res){
    try{
        const patients = await patientController.getAll();
        res.json(patients);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

async function getByID (req,res){
    try{
        const id = req.params.id;
        const patient = await patientController.getByID(id);
        res.json(patient);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

async function edit (req,res){
    try{
        const id = req.params.id;
        const result = await patientController.edit(id,req.body);
        res.json(result);
    }catch(error){
        console.error(error);
        if (error.statusCode){
            res.status(error.statusCode).json({error: error.message});
        }else{
            res.status(500).json({error: "Server Error"});
        }
    }
}

export default{
    getAll,
    getByID,
    edit
};