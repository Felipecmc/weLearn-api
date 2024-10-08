import { Model, DataTypes } from 'sequelize';
import sequelize from '../config';

class Question extends Model {
    public id!: number;
    public idProfessor!: number;
    public idQuestionario!: number;
    public dica!: string;
    public enunciado!: string;
    public dificuldade!: string;
    public alternativaCorreta!: string;
    public alternativaA!: string;
    public alternativaB!: string;
    public alternativaC!: string;
    public alternativaD!: string;
}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        idProfessor: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      idQuestionario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dica: {
      type: DataTypes.STRING,
      allowNull: false,
  },
        enunciado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificuldade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alternativaCorreta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alternativaA: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alternativaB: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alternativaC: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alternativaD: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize, 
        tableName: 'questions',
        modelName: 'Question',
    }
);

export default Question;
