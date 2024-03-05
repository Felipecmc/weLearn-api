import { Model, DataTypes } from 'sequelize';
import sequelize from '../config'; 
import bcrypt from 'bcryptjs';



class User extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;
  public perfil!: 'Aluno' | 'Professor';
  public senha!: string;
  public xp!: number;
  public weCoin!: number;

  static async generateHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
  
  static async compareHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}




User.init(
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
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    perfil: {
      type: DataTypes.ENUM('Aluno', 'Professor'),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100],
      },
    },
    xp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    weCoin: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize, 
    tableName: 'users',
    modelName: 'User',
  }
);

export default User;
