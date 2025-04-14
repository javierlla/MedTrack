import Patient from "../../models/patients.js";
import Doctor from "../../models/doctors.js";
import Appointment from "../../models/appointments.js";

async function showData(req, res) {
    try {
        const user = req.session.user;

        if (!user) {
            return res.redirect("/login?error=You+are+not+logged+in");
        }

        if (user.role === "patient") {
            const patient = await Patient.findByPk(user.user_id);
            if (!patient) {
                return res.render("layout", { error: "Patient data not found" });
            }
            return res.render("data/show", { user, role: "patient", patient });
        }

        if (user.role === "doctor") {
            const doctor = await Doctor.findByPk(user.user_id);
            if (!doctor) {
                return res.render("layout", { error: "Doctor data not found" });
            }

            const appointments = await Appointment.findAll({
                where: { doctor_id: user.user_id },
                include: [{ model: Patient }]
            });

            return res.render("data/show", { user, role: "doctor", doctor, appointments });
        }

        return res.render("layout", { error: "Invalid user role" });
    } catch (error) {
        console.error(error);
        return res.render("layout", { error: "Internal Server Error" });
    }
}

export default {
    showData
};