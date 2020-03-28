import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import sensorRoutes from './server/src/routes/SensorsRoutes';
import statusRoutes from './server/src/routes/StatusRoutes';
import pg from 'pg'
import database from './server/src/models';


pg.defaults.ssl = true;

async function connection(){
    try {
        await database.sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connection()

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8008;

app.use('/api/sensor', sensorRoutes);
app.use('/api/status', statusRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

export default app;