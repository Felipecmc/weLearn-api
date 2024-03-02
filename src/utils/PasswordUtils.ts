import bcrypt from 'bcryptjs';

class PasswordUtils {
  public static async hashPassword(password: string): Promise<string> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10); // Gera o hash da senha com um custo de 10
      return hashedPassword;
    } catch (error) {
      console.error('Erro ao gerar hash da senha:', error);
      throw new Error('Erro ao gerar hash da senha');
    }
  }
}

export default PasswordUtils;
