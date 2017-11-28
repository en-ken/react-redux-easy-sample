const jsonServer = require("json-server");

const server = jsonServer.create();
const middleware = jsonServer.defaults({ noCors: true });
const router = jsonServer.router(require("./mock-server.db.json"));

//Middleware
server.use(middleware);
server.use((req, res, next) => {
  //Preflight対策
  res.append("Access-Control-Allow-Origin", "http://localhost:8888");
  res.append("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.append("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Authorization, Ccb-Authentication");

  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
    console.log("responsed to preflight.");
  }
  else {
    //応答に3秒かかる
    setTimeout(next, 3000);
  }
});
server.use(router);
server.listen(3000, () => {
  console.log("Mock Server is running at localhost:3000...");
  console.log("Press Ctrl+C to quit.");
});