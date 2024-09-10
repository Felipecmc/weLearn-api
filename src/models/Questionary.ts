import { Model, DataTypes } from 'sequelize';
import sequelize from '../config'; 
import User from './User';

class Questionary extends Model{
    public id!: number;
    public nome!: string;
    public idProfessor! : number;
    public idSala! : number;
}

Questionary.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
          },
          nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [3, 50],
            }
          },
          idProfessor: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          idSala: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
    },
    {
        sequelize, 
        tableName: 'questionaries',
        modelName: 'Questionary',
    }
)

export default Questionary