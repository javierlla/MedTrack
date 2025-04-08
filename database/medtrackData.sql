
USE medtrack;

-- ========================
-- Insertar en tabla users
-- ========================
INSERT INTO users (user_id, email, password) VALUES
  (1, 'juan.paciente@example.com', 'hashed_password1'),
  (2, 'ana.paciente@example.com', 'hashed_password2'),
  (3, 'carlos.doctor@example.com', 'hashed_password3'),
  (4, 'laura.doctora@example.com', 'hashed_password4');

-- ========================
-- Insertar en tabla rooms
-- ========================
INSERT INTO rooms (room_id, name) VALUES
  (1, 'Sala A'),
  (2, 'Sala B');

-- ==========================
-- Insertar en tabla patients
-- ==========================
INSERT INTO patients (name, surname, birthdate, ssn, telephone, user_id) VALUES
  ('Juan', 'Pérez', '1990-05-10', '123-45-6789', '600123456', 1),
  ('Ana', 'García', '1985-08-20', '987-65-4321', '611987654', 2);

-- =========================
-- Insertar en tabla doctors
-- =========================
INSERT INTO doctors (name, surname, speciality, telephone, user_id, room_id) VALUES
  ('Carlos', 'Fernández', 'Cardiología', '622123456', 3, 1),
  ('Laura', 'Martínez', 'Pediatría', '633987654', 4, 2);

-- =============================
-- Insertar en tabla appointments
-- =============================
INSERT INTO appointments (appointment_id, date, patient_id, doctor_id) VALUES
  (1, '2025-04-08 10:00:00', 1, 3),
  (2, '2025-04-08 11:30:00', 2, 4);

-- ==============================
-- Insertar en tabla prescriptions
-- ==============================
INSERT INTO prescriptions (prescription_id, appointment_id) VALUES
  (1, 1),
  (2, 2);

-- ==============================
-- Insertar en tabla medications
-- ==============================
INSERT INTO medications (medication_id, name) VALUES
  (1, 'Paracetamol'),
  (2, 'Ibuprofeno'),
  (3, 'Amoxicilina'),
  (4, 'Omeprazol');

-- ==============================================
-- Insertar en tabla medications_prescriptions
-- ==============================================
-- Receta 1: Juan con Paracetamol y Amoxicilina
INSERT INTO medications_prescriptions (medication_id, prescription_id) VALUES
  (1, 1),
  (3, 1);

-- Receta 2: Ana con Ibuprofeno y Omeprazol
INSERT INTO medications_prescriptions (medication_id, prescription_id) VALUES
  (2, 2),
  (4, 2);
