const City = require('./City');
const Provider = require('./Provider');
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Path = sequelize.define('Path', {
    initCidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endCidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modal: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    prestNome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dia: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('dia').split(',');
      },
      set(dia) {
        this.setDataValue('dia',dia.join(','));
     },
    },
    hora: {
      type: DataTypes.STRING,
      get() {
        return this.getDataValue('hora').split(',');
      },
      set(hora) {
        this.setDataValue('hora',hora.join(','));
     },

    }
  }, {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      }
    });
  Path.associate = function (models) {
    // associations can be defined here
    // Path.hasMany(City);
    // Path.hasOne(Provider);
  };
  return Path;
};