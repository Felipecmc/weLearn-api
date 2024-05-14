import { DataTypes, Model } from "sequelize";
import sequelize from "../config";

class RoomUser extends Model {
  public id!: number;
  public idAluno!: string;
  public idSala!: string;
  public percentualConcluido!: number;
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
    }

}, { sequelize, modelName: 'roomUser', timestamps: true });

export default RoomUser