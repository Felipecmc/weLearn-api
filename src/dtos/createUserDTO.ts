interface CreateUserDTO {
    nome: string;
    email: string;
    perfil: 'Aluno' | 'Professor';
    senha: string;
  }
  
  export default CreateUserDTO;
  