const Router = require("@koa/router");
const authController = require("../controllers/auth.controller");

const router = new Router({ prefix: "/auth" });

router.post("/register", authController.register);

module.exports = router;
