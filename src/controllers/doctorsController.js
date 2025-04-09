import Doctor from '../../models/doctors.js';
import bcrypt from 'bcrypt';


async function getAll(req,res){
    //res.send("Conseguir todos los stands");
    const doctors = await Doctor.findAll();
    //console.log(stands);
    //res.json(stands)
    const role = req.session.user?.role;
    res.render("doctor/list",{doctors});
}
  
 async function getByID(req,res){
    const id = req.params.id;
    //const {id} = req.params;
    //res.send("Conseguir el stand "+id);
    const stand = await standModel.findByPk(id,{
        include: [Product,StandCategory,Seller]
    });
    //res.json(stand);
    res.render("stand/show",{stand}); // la ruta de render es a partir de la carpeta views, no la del router
}
  
  export default usuarioController;
