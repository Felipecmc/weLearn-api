import { Model } from 'sequelize';
import sequelize from './config';
import User from './models/User';
// Importe outros modelos conforme necessário

// Lista de modelos que deseja sincronizar
const modelsToSync = [User /* Adicione outros modelos aqui */];

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
    console.log("Deu ruim viado")
  }
}

export default initialize;
  