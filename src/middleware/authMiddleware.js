import { verifyToken } from "../utils/token.js";

// Middleware para sesiones (vistas)
function isLoggedInSession(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=You+are+not+logged+in");
    }
    // Opcional: comprobar si el usuario aún existe en base de datos
    next();
}

// Middleware para APIs (token JWT)
function isLoggedInAPI(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({ error: "You shall not pass" });
    }

    const parts = authorization.split(" ");
    const token = parts.length === 2 ? parts[1] : null;

    if (!token) {
        return res.status(401).json({ error: "Invalid authorization header format" });
    }

    const result = verifyToken(token);
    if (result) {
        req.user = {
            user_id: result.user_id,
            role: result.role
        };
        next();
    } else {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

// Middleware específico para role = patient
function isPatient(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=You+are+not+logged+in");
    }
    if (user.role === "patient") {
        return next();
    }
    return res.redirect("/login?error=You+are+not+a+patient");
}

// Middleware específico para role = doctor
function isDoctor(req, res, next) {
    const user = req.session.user;
    if (!user) {
        return res.redirect("/login?error=You+are+not+logged+in");
    }
    if (user.role === "doctor") {
        return next();
    }
    return res.redirect("/login?error=You+are+not+a+doctor");
}

function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        // El usuario está logueado, continuamos
        next();
    } else {
        // No está logueado, redirigimos a login
        res.redirect('/login?error=You+need+to+log+in+first');
    }
}

export default isAuthenticated;


export {
    isLoggedInSession,
    isLoggedInAPI,
    isPatient,
    isDoctor
};
