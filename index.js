import express from 'express';
import { jsonGraphqlExpress } from 'json-graphql-server';
import users from './data/users';
import agents from './data/agents';
import customers from './data/customers';
import tasks from './data/tasks';
import projects from './data/projects';
import userprofiles from './data/userprofiles';

const addUserId = (_users) => { _users.forEach((e, i) => _users[i]['user_id'] = e.id); return _users; };

const PORT = 3000;
const app = express();
const data = {
    users: users,
    agents: addUserId(agents),
    customers: addUserId(customers),
    userprofiles: userprofiles,
    tasks: tasks,
    projects: projects
};
app.use('/graphql', jsonGraphqlExpress(data));
app.listen(PORT, () => {
    console.log(`Now serving Agent Taskboard json-graphql-server at PORT ${PORT}...`);
});