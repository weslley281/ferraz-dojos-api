import { DataTypes } from 'sequelize';
import { connection } from '../db';

const graduation_studentModel = connection.define('graduations_student', {
  id_graduation_student: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  id_student: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  id_graduation: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  id_dojo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

function createTableGraduation_student() {
  return graduation_studentModel.sync({ force: false }).then(() => {
    console.log('*******Graduation Student table successfully created*******');
  });
}

export { graduation_studentModel, createTableGraduation_student };
