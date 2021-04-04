const router = require("express").Router();
const { create, findAll, findOne, update, remove } = require("./controller");

router.post("/", create);

router.get("/", findAll);

router.get("/:id", findOne);

router.put("/:id", update);

router.delete("/:id", remove);

module.exports = router;