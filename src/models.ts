
export interface Tag {
  title: string;
  color: string;
  todos?: [Todo];
}

export interface Todo {
  id: string;
  title: string;
  content: string;
  tags: [Tag];
  complete: boolean;
}
