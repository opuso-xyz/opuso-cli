import * as storage from 'node-persist';

class LocalStorage {
  async initialize() {
    await storage.init();
  }

  async setData(key: string, data: any) {
    return storage.setItem(key, data);
  }

  async getData(key: string): Promise<any> {
    return storage.getItem(key);
  }

  async clearData(key: string): Promise<any> {
    return storage.del(key);
  }
}

const appLocalStorage = new LocalStorage();

export default appLocalStorage;
