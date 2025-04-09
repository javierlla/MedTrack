import User from "../models/user.js";
import Doctor from "../models/doctors.js";
import Patient from "../models/patients.js";
import {hash,compare} from "../utils/bcrypt.js";

function loginForm(req,res){
    const {error,message} = req.query;
    res.render("auth/login",{error,message});
}
function registerForm(req,res){
    const {error,message} = req.query;
    res.render("auth/register",{error,message});
}

async function register(req,res){
    const {name,email,password,role} = req.body;
    const oldUser = await User.findOne({
        where:{
            email: email
        }
    })
    if(oldUser){
        return res.redirect(`/register?error=a+user+with+that+email+already+exists`);
        //return res.json({error:"a user with that email already exists "})
    }
    const hashedPassword = await hash(password)
    const result = await User.create({name,email,password:hashedPassword});
    if (role === "patient") {
        await Patient.create({ user_id: result.user_id});
    }
    else if (role === "doctor") {
        await Doctor.create({ user_id: result.user_id});
    }
    res.redirect("/login?message=Registered+successfully");
}
async function login(req,res)
{
    const {email,password} = req.body;
    const user = await User.findOne({
        where:{
            email: email
        }
    })
    if(!user){
        return res.redirect("/login?error=invalid+credentials");
    }

    const result = await compare(password,user.password);
    if(result){
        const patient = await Patient.findByPk(user.user_id);
        const doctor = await Doctor.findByPk(user.user_id);

        let role = null;
        if (doctor) role = "doctor";
        else if (patient) role = "patient";

        if (!role) {
            return res.redirect("/login?error=User+has+no+assigned+role");
        }

        req.session.user = {
            user_id: user.user_id,
            role: role
        };

        return res.redirect("/?message=You+are+logged+in");
    }
    else {
        return res.redirect("/login?error=invalid+credentials");
    }
}


function logout(req,res){
    req.session.user = undefined;
    res.redirect("/");
}
export default {
    loginForm,
    registerForm,
    register,
    login,
    logout
}