const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_test', 'root', '*123#Jarvis', {
    host: 'localhost',
    dialect:'mysql'
  });

const dbConnection = async()=>{
    try{
        await sequelize.authenticate()
        console.log("DB Connected")
    }
    catch(e){
        console.log("Unable to connect to DB because:", e)
    }
}

module.exports = dbConnection;
global.sequelize = sequelize;