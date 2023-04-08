import { DataTypes } from 'sequelize';
import { connection } from '../db';

const dojoModel = connection.define('dojo', {
  id_dojo: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  dojo: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  address_line1: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  address_line2: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  paid_out: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

function createTableDojo(dojo: any) {
  return dojoModel.sync({ force: false }).then(() => {
    console.log('*******Dojo table successfully created*******');
  });
}

export { dojoModel, createTableDojo };
