import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((responce) => {
  const todos = responce.data as Todo;
  const { id, title, completed } = todos;
  todoLog(id, title, completed);
});
const todoLog = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Had a title of: ${title}
    Is it finished ? ${completed}
`);
};
