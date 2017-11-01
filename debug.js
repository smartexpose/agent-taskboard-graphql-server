import users from './data/users';

const addUserId = (_users) => { _users.forEach((e, i) => _users[i]['user_id'] = e.id); return _users; };
console.log(addUserId(users)[0]);