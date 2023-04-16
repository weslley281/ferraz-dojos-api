import { DataTypes } from 'sequelize';
import { connection } from '../db';

const martial_artModel = connection.define('martial_art', {
  id_martial_art: {
    type: DataTypes.STRING(300),
    primaryKey: true,
    allowNull: false,
  },
  martial_art: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  id_dojo: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

function createTableMartial_art() {
  return martial_artModel.sync({ force: false }).then(() => {
    console.log('*******Martia Art table successfully created*******');
  });
}

export { martial_artModel, createTableMartial_art };
