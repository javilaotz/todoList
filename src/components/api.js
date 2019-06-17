let items = [
  {
    id: '7Q4t_QQGU',
    desc: 'Task 1 from API',
    done: false
  },
  {
    id: '75t_GUQQ',
    desc: 'Task 2 from API',
    done: false
  }
];

export const fetchTodos = () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(items);
    }, 1000)
  );
};

export const addTodo = i => {
  items = [...items, i];
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(i);
    }, 1000)
  );
};

//Debe retornar el item que cambió
export const toggleTodo = id => {
  const item = items.find(i => i.id === id);
  item.done = !item.done;
  return Promise.resolve(item);
};
