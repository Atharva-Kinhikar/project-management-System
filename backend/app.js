const express = require('express');
const app = express();
const routes = require('./routes');
const middleware = require('./middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware.auth);

app.use('/auth', routes.auth);
app.use('/dashboard', routes.dashboard);
app.use('/projects', routes.projects);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});