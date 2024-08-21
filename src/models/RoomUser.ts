import { DataTypes, Model } from "sequelize";
import sequelize from "../config";

class RoomUser extends Model {
  public id!: number;
  public idAluno!: string;
  public idSala!: string;
  public percentualConcluido!: number;
  public elo!: 'Diamante' | 'Ouro' | 'Prata' | 'Bronze'
}
RoomUser.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
    idAluno: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: false
    },
    idSala: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: false
    },
    percentualConcluido: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    elo: {
        type: DataTypes.ENUM('Diamante', 'Ouro', 'Prata', 'Bronze'),
        allowNull: false,
        defaultValue: 'Bronze',
      },

}, { sequelize, modelName: 'roomUser', timestamps: true });

export default RoomUser