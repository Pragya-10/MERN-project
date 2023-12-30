//description get goals
// @routed and get/api/goals

const getGoal = (req, res) => {
  res.status(200).json({ message: "Get Goal" });
};

//description set goas
// @routed and POST/api/goals

const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");

    //30:25 tak dekha hai
  }
  res.status(200).json({ message: "Set goal" });
};

//description update goals
// @routed and PUT/api/goals:id

const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
};

//description delete goals
// @routed and DELETE/api/goals:id

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
