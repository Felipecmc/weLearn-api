// sequelize.ts
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'weLearn.sqlite',
});

export default sequelize;


