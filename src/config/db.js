import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        define: {
            timestamps: false,
            freezeTableName: true
        }
    }
);

// Probar la conexión
connection.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida'))
    .catch(err => console.error('Error al conectar a la base de datos:', err));

export default connection;