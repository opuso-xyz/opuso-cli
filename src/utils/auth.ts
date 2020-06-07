import { GraphQLClient } from 'graphql-request';
import appLocalStorage from './app-local-storage';

export interface UserData {
  id: string;
  email: string;
  name: string;
  token: string;
}

class Auth {
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(process.env.API_ENDPOINT || 'http://localhost:8000');
  }

  async signupUser(email: string, password: string, name: string): Promise<UserData> {
    const query = `
mutation {
  result: signup(
    email: "${email}",
    password: "${password}",
    name: "${name}"
  ) {
    token
    user {
      id
      email
      name
    }
  }
}
    `;
    return this.queryAndHandleData(query);
  }

  async loginUser(email: string, password: string): Promise<UserData> {
    const query = `
mutation {
  result: login(
    email: "${email}",
    password: "${password}",
  ) {
    token
    user {
      id
      email
      name
    }
  }
}
    `;

    return this.queryAndHandleData(query);
  }

  private async queryAndHandleData(query: any): Promise<UserData> {
    try {
      const data = await this.client.request(query) as any;
      data.result.user.token = data.result.token;
      await this.setCurrentUser(data.result.user);
      return data.result.user;
    } catch (e) {
      throw new Error(e.response.errors[0].message);
    }
  }

  async isLoggedIn() {
    const currentUser = this.getCurrentUser();
    return currentUser === null;
  }

  async getCurrentUser(): Promise<UserData> {
    return appLocalStorage.getData('user');
  }

  async setCurrentUser(user: UserData) {
    return appLocalStorage.setData('user', user);
  }

  async logoutUser() {
    return appLocalStorage.clearData('user');
  }
}

const auth = new Auth();
export default auth;
