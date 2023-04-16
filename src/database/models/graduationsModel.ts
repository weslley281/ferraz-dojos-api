import { DataTypes } from 'sequelize';
import { connection } from '../db';

const graduationModel = connection.define('graduation', {
  id_graduation: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  graduation: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  id_martial_art: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  id_dojo: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

function createTableGraduation() {
  return graduationModel.sync({ force: false }).then(() => {
    console.log('*******Graduation table successfully created*******');
  });
}

export { graduationModel, createTableGraduation };
