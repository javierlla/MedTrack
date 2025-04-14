import User from "../../models/users.js";
import Doctor from "../../models/doctors.js";
import Patient from "../../models/patients.js";
import { hash, compare } from "../../utils/bcrypt.js";
import {
    UserMailProvided,
    UserEmailAlreadyExists,
    UserNameProvided,
    UserRoleIncorrect,
    UserPasswordNotProvided,
    UserInvalidCredentials
} from "../../utils/errors.js";

async function register(userData) {
    if (!userData.name) throw new UserNameProvided();
    if (!userData.email) throw new UserMailProvided();
    if (!userData.password) throw new UserPasswordNotProvided();

    userData.role = userData.role ? userData.role.toLowerCase() : "patient";

    const roles = ["doctor", "patient"];
    if (!roles.includes(userData.role)) {
        throw new UserRoleIncorrect();
    }

    const oldUser = await User.findOne({ where: { email: userData.email } });
    if (oldUser) {
        throw new UserEmailAlreadyExists();
    }

    userData.password = await hash(userData.password);

    const result = await User.create(userData);

    await Patient.create({ user_id: result.user_id,
        ...userData
    });

    return result;
}

async function login(email, password) {
    if (!email) throw new UserMailProvided();
    if (!password) throw new UserPasswordNotProvided();

    const user = await User.findOne({ where: { email } });

    if (!user) throw new UserInvalidCredentials();

    const isSamePassword = await compare(password, user.password);

    if (!isSamePassword) throw new UserInvalidCredentials();

    const patient = await Patient.findByPk(user.user_id);
    const doctor = await Doctor.findByPk(user.user_id);

    const role = doctor ? "doctor" : patient ? "patient" : null;

    if (!role) throw new UserRoleIncorrect();

    user.role = role;
    return user;
}

function logout(req, res) {
    req.session.user = undefined;
    res.redirect("/");
}

export default {
    register,
    login,
    logout
};
