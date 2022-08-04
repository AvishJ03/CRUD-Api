const express = require("express");
const user = require("./controllers");
const router = express.Router();

router.get("/", user.getAllUsers);
router.get("/:id", user.getUserById);
router.post("/", user.createUser);
router.patch("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

module.exports = router;