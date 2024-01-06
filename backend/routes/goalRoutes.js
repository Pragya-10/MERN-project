const express = require("express");
const colors = require("colors");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoal).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
