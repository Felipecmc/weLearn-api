import { Model } from 'sequelize';
import sequelize from './config';
import User from './models/User';
import Room from './models/Room';
import RoomUser from './models/RoomUser';
import Questionary from './models/Questionary';
import Question from './models/Question';
import Responses from './models/Responses';
// Importe outros modelos conforme necessário

// Lista de modelos que deseja sincronizar
const modelsToSync = [ User, Room, RoomUser, Questionary, Question, Responses];

async function syncModels(models: typeof Model[]) {
  try {
    for (const model of models) {
      await model.sync({ force: false });
      console.log(`Tabela ${model.name} sincronizada com sucesso.`);
    }
  } catch (error) {
    console.error('Erro ao sincronizar tabelas:', error);
  }
}




async function initialize() {
  try{
    syncModels(modelsToSync);
  }catch(error){
    console.log("erro ao sincronizar tabelas")
  }
}

export default initialize;
  