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
  signup(
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
    try {
      const data = await this.client.request(query) as any;
      data.signup.user.token = data.signup.token;
      await this.setCurrentUser(data.signup.user);
      return data.signup.user;
    } catch (e) {
      const errorMessage = e.response.errors[0].message;
      if (errorMessage.includes('duplicate key error')) {
        throw new Error('User already registered with that email!');
      } else {
        throw new Error(errorMessage);
      }
    }
  }

  async loginUser(email: string, password: string): Promise<UserData> {
    const query = `
mutation {
  login(
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

    try {
      const data = await this.client.request(query) as any;
      data.login.user.token = data.login.token;
      await this.setCurrentUser(data.login.user);
      return data.login.user;
    } catch (e) {
      const errorMessage = e.response.errors[0].message;
      if (errorMessage.includes('No such user found')) {
        throw new Error('Email or password incorrect!');
      } else {
        throw new Error(errorMessage);
      }
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
