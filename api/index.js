const config = require ('./utils/config');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const routes = require("./router/routes");
app.use(routes);

module.exports = app;

if(require.main === module)
{
  const port = config.port || 3000

  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  });
}
