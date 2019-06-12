let items = [
  {
    id: '7Q4t_QQGU',
    desc: 'Task 1',
    done: false
  },
  {
    id: '75t_GUQQ',
    desc: 'Task 2',
    done: false
  }
];

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: 'User with ' + userID + ' not found.'
          })
    );
  });
}
