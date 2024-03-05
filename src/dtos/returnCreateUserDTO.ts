interface ReturnCreateUserDTO {
    id: number
    nome: string;
    email: string;
    perfil: 'Aluno' | 'Professor';
  }

export default ReturnCreateUserDTO;