const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', apiRoutes);
  app.listen(PORT, async () => {
   console.log(`Server Started on Port: ${PORT}`);
    // const service = new UserService();
    // const newToken = service.createToken({id: 1, email: '2F2d1@example.com'});
    // console.log("Token: ", newToken);
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiIyRjJkMUBleGFtcGxlLmNvbSIsImlhdCI6MTc0OTI5NTUzNywiZXhwIjoxNzQ5Mjk1NTY3fQ.I8FOi3c_dqk20F-Xi_vicrXl6lglZvXiQQ4GCuVtevQ';
    // const response = service.verifyToken(token);
    // console.log(response);
  });
}

prepareAndStartServer();