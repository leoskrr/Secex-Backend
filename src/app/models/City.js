'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    nome:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    relations:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cBase:{
      type:DataTypes.BOOLEAN
    },
    cAuditada: {
      type:DataTypes.BOOLEAN
    },
    initDataCheia: {
      type:DataTypes.STRING
    },
    endDataCheia: {
      type:DataTypes.STRING
    },
    obsInterdicao: {
      type: DataTypes.TEXT
    },
    obsCidade: {
      type: DataTypes.TEXT
    }
  }, {
    
    defaultScope: {
      attributes: { exclude: ['createdAt','updatedAt'] },
    }
  });
  
  City.associate = (models) =>{
    City.belongsToMany(models.City, {
        through: 'cityProviders',
        as : 'providers',
        foreignKey: 'CityId'        
        });
    };
  return City;
};