import Doctor from '../../models/doctors.js';


async function getAll(req,res){
    //res.send("Conseguir todos los stands");
    const doctors = await Doctor.findAll();
    //console.log(doctors);
    res.json(doctors)
    //res.render("doctor/list",{doctors});
}
  
async function getByID(req,res){
    const id = req.params.id;
    //res.send("Conseguir el stand "+id);
    const doctor = await Doctor.findByPk(id);
    res.json(doctor);
    //res.render("stand/show",{stand}); // la ruta de render es a partir de la carpeta views, no la del router
}

export default{
    getAll,
    getByID
}