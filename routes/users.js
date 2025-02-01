const router = require("express").Router();
const { getOne } = require("../controllers/users");

router.get("/:id", getOne);

module.exports = router;
