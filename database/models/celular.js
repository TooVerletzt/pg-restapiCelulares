'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Celular extends Model {
    static associate(models) {
      // relaciones si las hubiera
    }
  }

  Celular.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    color: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Celular',
    tableName: 'celulares',
  });

  return Celular;
};

