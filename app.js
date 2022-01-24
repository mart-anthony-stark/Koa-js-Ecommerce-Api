const Koa = require("koa");
const router = require("./routes");

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(router());

app.listen(PORT, (e) => {
  if (e) return console.log(e);
  console.log(`Server started at port ${PORT}`);
});
