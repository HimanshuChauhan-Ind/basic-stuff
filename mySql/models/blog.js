const {Sequelize, DataTypes} = require('sequelize')

const Blog = sequelize.define('Blog',{
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    body:{
        type: DataTypes.STRING,
    }
})

Blog.sync()
    .then(()=>{
        console.log("Table created Successfully")
    })
    .catch((err)=>{
        console.log('Table not created')
        console.log(err)
    })

module.exports = Blog