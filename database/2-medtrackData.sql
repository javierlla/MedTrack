USE medtrack;

-- ========================
-- Insertar en tabla users
-- ========================
INSERT INTO users (user_id, email, password) VALUES
  (1, 'juan.paciente@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
  (2, 'ana.paciente@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
  (3, 'carlos.doctor@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
  (4, 'laura.doctora@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
  (5, 'sofia.rios@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
  (6, 'manuel.lopez@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
  (7, 'ana.navarro@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK');

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
  ('Juan', 'Perez', '1990-05-10', '123-45-6789', '600123456', 1),
  ('Ana', 'Garcia', '1985-08-20', '987-65-4321', '611987654', 2),
  ('Sofia', 'Rios', '1995-07-08', '333-44-5555', '600100003', 5),
  ('Manuel', 'Lopez', '1979-01-15', '444-55-6666', '600100004', 6),
  ('Ana', 'Navarro', '1982-06-30', '555-66-7777', '600100005', 7);

-- =========================
-- Insertar en tabla doctors
-- =========================
INSERT INTO doctors (name, surname, speciality, telephone, user_id, room_id) VALUES
  ('Carlos', 'Fernandez', 'Cardiology', '622123456', 3, 1),
  ('Laura', 'Martinez', 'Pediatry', '633987654', 4, 2);

-- =============================
-- Insertar en tabla appointments
-- =============================
INSERT INTO appointments (appointment_id, date, patient_id, doctor_id) VALUES
  (1, '2025-05-08 10:00:00', 1, 3),
  (2, '2025-05-09 11:00:00', 2, 4),
  (3, '2025-05-10 09:00:00', 2, 3),
  (4, '2025-05-10 09:00:00', 5, 4);
  

-- ==============================
-- Insertar en tabla prescriptions
-- ==============================
INSERT INTO prescriptions (prescription_id, appointment_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4);

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

  INSERT INTO medications_prescriptions (medication_id, prescription_id) VALUES
  (2, 3),
  (1, 3);