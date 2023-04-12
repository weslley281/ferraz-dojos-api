import { DataTypes } from 'sequelize';
import { connection } from '../db';

const graduation_instructorModel = connection.define('graduations_instructor', {
  id_graduation_instructor: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  id_instructor: {
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

function createTableGraduation_instructor(graduation_instructor: any) {
  return graduation_instructorModel.sync({ force: false }).then(() => {
    console.log(
      '*******Graduation_instructor table successfully created*******'
    );
  });
}

export { graduation_instructorModel, createTableGraduation_instructor };
