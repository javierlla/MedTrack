import roomController from "./roomController.js";

async function getAll (req,res){
    try{
        const rooms = await roomController.getAll();
        res.json(rooms);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

async function getByID (req,res){
    try{
        const id = req.params.id;
        const room = await roomController.getByID(id);
        res.json(room);
    }catch(error){
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
}

async function edit (req,res){
    try{
        const id = req.params.id;
        const result = await roomController.edit(id,req.body);
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