interface ReturnUserDTO {
    id: number
    nome: string;
    email: string;
    perfil: 'Aluno' | 'Professor';
  }

export default ReturnUserDTO;