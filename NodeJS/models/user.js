const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Users = Sequelize.define("Users", {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
        UserName:{
            type: DataTypes.STRING,
            allowNull: false            
        },
        PhoneNo:{
            type: DataTypes.STRING,
            allowNull: false            
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false            
        },
        Address:{
            type: DataTypes.STRING,
            allowNull: false            
        },
        Position:{
            type: DataTypes.STRING,
            allowNull: false            
        }
    });
    return Users;
};