import { Model, DataTypes } from 'sequelize';
import sequelize from '../config';

class Responses extends Model{

    public id!: number
    public idQuestion!: number
    public idAluno!: number
    public response!: string
    public acertou!: boolean

}


    Responses.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            idQuestion: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idAluno: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            response: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            acertou: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Responses',
            tableName: 'responses',
            timestamps: true,
        }
    );

export default Responses
