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
    }, 3000)
  );
};

export const addTodo = i => {
  items = [...items, i];
  return Promise.resolve(i);
};

//Debe retornar el item que cambió
export const toggleTodo = id => {
  //console.log(id, "id received")
  items.forEach(item => {
    if (item.id === id) {
      //console.log(item, "item encontrado")
      item.done = !item.done;
    }
  });
  //console.log(items, "Items antes de enviarse")
  return Promise.resolve(items);
};
