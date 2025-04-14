USE medtrack;

-- ========================
-- Insertar en tabla users
-- ========================
INSERT INTO
  users (user_id, email, password)
VALUES
  (
    1,
    'maria.paciente@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  ),
  (
    2,
    'luis.paciente@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  ),
  (
    3,
    'carmen.paciente@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  ),
  (
    4,
    'david.paciente@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  ),
  (
    5,
    'sofia.paciente@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  ),
  (
    6,
    'jose.doctor@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  ),
  (
    7,
    'lucia.doctor@example.com',
    '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'
  );

-- ========================
-- Insertar en tabla rooms
-- ========================
INSERT INTO
  rooms (room_id, name)
VALUES
  (1, 'Sala A'),
  (2, 'Sala B');

-- ==========================
-- Insertar en tabla patients
-- ==========================
INSERT INTO
  patients (name, surname, birthdate, ssn, telephone, user_id)
VALUES
  (
    'María',
    'González',
    '1985-04-12',
    '12345678A',
    '600123456',
    1
  ),
  (
    'Luis',
    'Martínez',
    '1990-09-23',
    '23456789B',
    '600234567',
    2
  ),
  (
    'Carmen',
    'López',
    '1978-01-30',
    '34567890C',
    '600345678',
    3
  ),
  (
    'David',
    'Fernández',
    '2000-07-15',
    '45678901D',
    '600456789',
    4
  ),
  (
    'Sofía',
    'Ruiz',
    '1995-12-05',
    '56789012E',
    '600567890',
    5
  );

-- =========================
-- Insertar en tabla doctors
-- =========================
INSERT INTO
  doctors (
    name,
    surname,
    speciality,
    telephone,
    user_id,
    room_id
  )
VALUES
  (
    'José',
    'Ramírez',
    'Cardiology',
    '610123456',
    6,
    1
  ),
  ('Lucía', 'Santos', 'Pediatry', '610456789', 9, 2);

-- =============================
-- Insertar en tabla appointments
-- =============================
INSERT INTO
  appointments (appointment_id, date, patient_id, doctor_id)
VALUES
  (1, '2025-05-05 08:00:00', 1, 6),
  (2, '2025-05-07 09:00:00', 1, 7),
  (3, '2025-05-10 10:00:00', 1, 6),
  (4, '2025-05-12 08:00:00', 1, 7),
  (5, '2025-05-15 09:00:00', 1, 6),
  (6, '2025-05-06 08:00:00', 2, 7),
  (7, '2025-05-08 09:00:00', 2, 6),
  (8, '2025-05-10 08:00:00', 2, 7),
  (9, '2025-05-13 10:00:00', 2, 6),
  (10, '2025-05-16 11:00:00', 2, 7),
  (11, '2025-05-05 09:00:00', 3, 7),
  (12, '2025-05-07 10:00:00', 3, 6),
  (13, '2025-05-10 09:00:00', 3, 7),
  (14, '2025-05-12 11:00:00', 3, 6),
  (15, '2025-05-14 08:00:00', 3, 7),
  (16, '2025-05-06 10:00:00', 4, 6),
  (17, '2025-05-08 08:00:00', 4, 7),
  (18, '2025-05-10 10:00:00', 4, 6),
  (19, '2025-05-13 09:00:00', 4, 7),
  (20, '2025-05-15 11:00:00', 4, 6),
  (21, '2025-05-07 08:00:00', 5, 7),
  (22, '2025-05-09 09:00:00', 5, 6),
  (23, '2025-05-11 10:00:00', 5, 7),
  (24, '2025-05-13 08:00:00', 5, 6),
  (25, '2025-05-14 10:00:00', 5, 7),
  (26, '2025-05-15 08:00:00', 5, 6);

-- ==============================
-- Insertar en tabla prescriptions
-- ==============================
INSERT INTO
  prescriptions (prescription_id, appointment_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8),
  (9, 9),
  (10, 10),
  (11, 11),
  (12, 12),
  (13, 13),
  (14, 14),
  (15, 15),
  (16, 16),
  (17, 17),
  (18, 18),
  (19, 19),
  (20, 20),
  (21, 21),
  (22, 22),
  (23, 23),
  (24, 24),
  (25, 25),
  (26, 26);

-- ==============================
-- Insertar en tabla medications
-- ==============================
INSERT INTO
  medications (medication_id, name)
VALUES
  (1, 'Paracetamol'),
  (2, 'Ibuprofeno'),
  (3, 'Amoxicilina'),
  (4, 'Omeprazol');

-- ==============================================
-- Insertar en tabla medications_prescriptions
-- ==============================================
INSERT INTO
  medications_prescriptions (medication_id, prescription_id)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (1, 4),
  (4, 4),
  (2, 5),
  (3, 5),
  (1, 6),
  (4, 7),
  (2, 8),
  (1, 9),
  (2, 9),
  (3, 10),
  (1, 11),
  (1, 12),
  (4, 12),
  (2, 13),
  (3, 14),
  (4, 14),
  (1, 15),
  (2, 16),
  (4, 17),
  (1, 18),
  (3, 18),
  (2, 19),
  (4, 20),
  (1, 21),
  (2, 21),
  (3, 22),
  (2, 23),
  (1, 24),
  (4, 24),
  (3, 25),
  (2, 26),
  (4, 26);