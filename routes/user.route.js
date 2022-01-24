const Router = require("@koa/router");
const userController = require("../controllers/user.controller");

const router = new Router({ prefix: "/user" });

router.get("/", userController.getUsers);

module.exports = router;
