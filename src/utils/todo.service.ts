import { GraphQLClient } from 'graphql-request';
import auth, { UserData } from './auth.service';
import { Todo } from '../models';
import Utils from './utils';

class TodoService {
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(process.env.API_ENDPOINT || 'http://localhost:8000');
  }

  async initialize() {
    const currentUser = await this.checkIfLoggedIn();
    this.client = new GraphQLClient(process.env.API_ENDPOINT || 'http://localhost:8000', {
      headers: {
        Authorization: currentUser.token,
      },
    });
  }

  async createTodo(title: string, content: string, tags?: string[]):
  Promise<Todo> {
    await this.initialize();
    const query = `
mutation {
  createTodo(
    title: "${title}",
    content: "${content}",
    tags: [${TodoService.parseTagsForGraphQl(tags ?? [''])}]
  ) {
    id
    title
    content
    complete
    tags {
      title
      color
    }
  }
}
    `;

    try {
      const todo = await this.client.request(query) as any;
      return todo.createTodo;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getTodosByTag(tag: string): Promise<Todo[]> {
    await this.initialize();
    const query = `
query {
  todos(tag: "${tag}") {
    title
    content
    id
    complete
    tags {
      title
      color
    }
  }
}
    `;

    try {
      const response = await this.client.request(query) as any;
      return response.todos;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getTodos(): Promise<Todo[]> {
    await this.initialize();
    const query = `
query {
  me {
    todos {
      id
      title
      content
      complete
      tags {
        title
        color
      }
    }
  }
}
    `;

    try {
      const todos = await this.client.request(query) as any;
      return todos.me.todos as Todo[];
    } catch (e) {
      throw Utils.graphQlError(e);
    }
  }

  async editTodo(id: string, title?: string, content?: string, tags?: string[]):
  Promise<Todo> {
    await this.initialize();
    const query = `
mutation {
  updateTodo(
    id: "${id}"
    ${title ? `title: "${title}"` : ''}
    ${content ? `content: "${content}"` : ''}
    ${tags ? `tags: [${TodoService.parseTagsForGraphQl(tags ?? [''])}]` : ''}
  ) {
    id
    title
    content
    complete
    tags {
      title
      color
    }
  }
}
    `;
    try {
      const res = await this.client.request(query) as any;
      return res.updateTodo as Todo;
    } catch (e) {
      throw Utils.graphQlError(e);
    }
  }

  async deleteTodo(id: string): Promise<void> {
    await this.initialize();
    const query = `
mutation {
  deleteTodo(id: "${id}") {
    id
  }
}
    `;
    try {
      await this.client.request(query);
      return;
    } catch (e) {
      Utils.graphQlError(e);
    }
  }

  async finishTodo(id: string): Promise<Todo> {
    await this.initialize();
    const query = `
mutation {
  finishTodo(id: "${id}") {
    title
    content
    complete
    id
    tags {
      title
      color
    }
  }
}
    `;
    try {
      const res = await this.client.request(query) as any;
      return res.finishTodo;
    } catch (e) {
      throw Utils.graphQlError(e);
    }
  }

  async checkIfLoggedIn(): Promise<UserData> {
    const currentUser = auth.getCurrentUser();
    if (currentUser === null) {
      throw new Error('Not logged in!');
    } else {
      return currentUser;
    }
  }

  private static parseTagsForGraphQl(tags: string[]): string[] {
    return tags.map((tag: string) => `"${tag}"`);
  }
}

const todoService = new TodoService();
export default todoService;
