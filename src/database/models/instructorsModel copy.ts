import { DataTypes } from 'sequelize';
import { connection } from '../db';

const instructorModel = connection.define('instructor', {
  id_instructor: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  instructor: {
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
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  paid_out: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  id_graduation: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  id_dojo: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

function createTableInstructor(instructor: any) {
  return instructorModel.sync({ force: false }).then(() => {
    console.log('*******Instructor table successfully created*******');
  });
}

export { instructorModel, createTableInstructor };
