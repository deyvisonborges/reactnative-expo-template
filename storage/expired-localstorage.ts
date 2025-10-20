import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Utilitário para armazenar dados no AsyncStorage com tempo de expiração.
 *
 * Exemplo:
 *   await ExpiredStorage.setItemWithExpiry('user', { id: 1 }, 1000 * 60 * 60);
 *   const user = await ExpiredStorage.getItemWithExpiry('user');
 */
export const ExpiredStorage = {
  /**
   * Salva um item com tempo de expiração.
   * @param key Chave no AsyncStorage
   * @param value Valor a ser armazenado (qualquer tipo serializável)
   * @param ttl Tempo de vida em milissegundos
   */
  async setItemWithExpiry<T>(
    key: string,
    value: T,
    ttl: number
  ): Promise<void> {
    try {
      const now = Date.now();
      const item = {
        value,
        expiry: now + ttl,
      };
      await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      console.warn(`[ExpiredStorage] Erro ao salvar item "${key}"`, error);
    }
  },

  /**
   * Obtém o valor armazenado, ou `null` se expirado ou inexistente.
   * @param key Chave no AsyncStorage
   */
  async getItemWithExpiry<T>(key: string): Promise<T | null> {
    try {
      const itemStr = await AsyncStorage.getItem(key);
      if (!itemStr) return null;

      const item = JSON.parse(itemStr);
      const now = Date.now();

      if (!item.expiry || now > item.expiry) {
        await AsyncStorage.removeItem(key);
        return null;
      }

      return item.value as T;
    } catch (error) {
      console.warn(`[ExpiredStorage] Erro ao ler item "${key}"`, error);
      await AsyncStorage.removeItem(key);
      return null;
    }
  },

  /**
   * Remove um item manualmente.
   * @param key Chave no AsyncStorage
   */
  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.warn(`[ExpiredStorage] Erro ao remover item "${key}"`, error);
    }
  },

  /**
   * Verifica se um item ainda é válido (sem pegar o valor).
   * @param key Chave no AsyncStorage
   */
  async isValid(key: string): Promise<boolean> {
    try {
      const itemStr = await AsyncStorage.getItem(key);
      if (!itemStr) return false;

      const item = JSON.parse(itemStr);
      const now = Date.now();

      return !!item.expiry && now < item.expiry;
    } catch {
      return false;
    }
  },
};
