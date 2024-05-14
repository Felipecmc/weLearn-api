import { Model, DataTypes } from 'sequelize';
import sequelize from '../config'; 
import User from './User';

class Room extends Model{
    public id!: number;
    public nome!: string;
    public idProfessor! : number;
    public arquivado!: boolean;
}

Room.init(
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
            allowNull: true
          },
          arquivado: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
          },
    },
    {
        sequelize, 
        tableName: 'rooms',
        modelName: 'Room',
    }
)



export default Room;