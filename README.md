# 🏥 MedTrack - Gestión de Citas Médicas

**MedTrack** es una aplicación backend que simula la gestión de un ambulatorio médico con diferentes especialidades. El sistema permite a pacientes registrarse, iniciar sesión y solicitar citas con los médicos disponibles, mientras que los médicos pueden consultar información relevante sobre sus pacientes.

---

## 📋 Descripción del Proyecto

Este proyecto simula un pequeño ambulatorio con 4 médicos, cada uno especializado en un área distinta. Los usuarios (pacientes) pueden:

- Registrarse en el sistema
- Iniciar sesión
- Solicitar una cita con uno de los médicos disponibles

Además, los médicos pueden:

- Visualizar información personal y médica de sus pacientes
- Ver un listado de citas asignadas

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** + **Express**: Backend y enrutamiento
- **Pug**: Motor de plantillas para las vistas
- **Sequelize**: ORM para la conexión con MySQL
- **MySQL**: Base de datos relacional (diseñada con Workbench)
- **CSS**: Estilos personalizados para mejorar la presentación
- **Docker**: Contenedores para la base de datos y la aplicación

---

## 🐳 Docker

El proyecto está completamente dockerizado. Utilizamos **Docker Compose** para levantar tanto la base de datos MySQL como la aplicación Node.js en contenedores separados.

### 🔧 ¿Cómo levantar el proyecto con Docker?

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/medtrack.git
   cd medtrack
