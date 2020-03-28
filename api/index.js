import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import testRoutes from './server/src/routes/TestRoutes';
import pg from 'pg'
import database from './server/src/models';
import Sequelize from 'sequelize'

pg.defaults.ssl = true;

/*let sequelize = new Sequelize(
    'status','postgres','qwerty',{host:'127.0.0.1', dialect:'postgres'}
);*/

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

const port = process.env.PORT || 8000;

app.use('/api/v1/test', testRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to this API.',
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

export default app;