const Koa = require("koa");
const koaBody = require("koa-body");
const router = require("./routes");
const mongoose = require("mongoose");
require("dotenv").config({});

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(koaBody({ multipart: true }));
app.use(router());

app.listen(PORT, async (e) => {
  if (e) return console.log(e);
  console.log(`Server started at port ${PORT}`);

  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to database`);
  } catch (e) {
    console.log(e);
  }
});
