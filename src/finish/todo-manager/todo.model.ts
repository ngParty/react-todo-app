import { uuidv4 } from '../shared';

export interface TodoModel {
  id: string;
  completed: boolean;
  title: string;
}

export const createTodo = (title: string) => {
  return {
    id: uuidv4(),
    completed: false,
    title
  };
};
