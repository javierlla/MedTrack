import { createToken } from "../../utils/token.js";
import authController from "./authController.js";

async function register(req, res) {
    try {
        const result = await authController.register(req.body);
        res.status(201).json(result); // 201 Created
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await authController.login(email, password);

        const payload = {
            user_id: result.user_id,
            role: result.role
        };

        const token = createToken(payload);
        res.json({ token }); // { token: "eyJ..." }
        
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

// (opcional)
function logout(req, res) {
    res.json({ message: "Logout by removing token on client" });
}

export default {
    register,
    login,
    logout // Puedes quitarla si no la necesitas
};
