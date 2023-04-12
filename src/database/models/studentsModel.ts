import { DataTypes } from 'sequelize';
import { connection } from '../db';

const studentModel = connection.define('student', {
  id_student: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  student: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  responsible: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  responsible_phone: {
    type: DataTypes.STRING(100),
    allowNull: true,
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
  id_dojo: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

function createTableStudent(student: any) {
  return studentModel.sync({ force: false }).then(() => {
    console.log('*******Student table successfully created*******');
  });
}

export { studentModel, createTableStudent };
