const express = require("express");
const { validateToken } = require("../middlewares/AuthMiddleware");
const router = express.Router();
const { Workouts } = require("../models");

router.get("/workoutslist/:limit", validateToken, async (req, res) => {
	const area = req.query.area;
	const limit = parseInt(req.params.limit);
	const UserId = req.user.id;
	let workoutsList;
	if (area) {
		workoutsList = await Workouts.findAll({
			where: { area: area, UserId: UserId },
			limit: limit,
		});
	} else {
		workoutsList = await Workouts.findAll({
			where: { UserId: UserId },
			limit: limit,
		});
	}
	res.json(workoutsList);
});
router.get("/:id", validateToken, async (req, res) => {
	const workoutId = req.params.id;

	const workout = await Workouts.findByPk(workoutId);

	res.json(workout);
});

router.post("/", validateToken, async (req, res) => {
	const workout = req.body;
	workout.UserId = req.user.id;
	await Workouts.create(workout);
	res.json(workout);
});

router.put("/:id", validateToken, async (req, res) => {
	const updatedWorkout = req.body;
	await Workouts.update(updatedWorkout, { where: { id: req.params.id } });
	res.json(updatedWorkout);
});

router.delete("/:id", validateToken, async (req, res) => {
	const workoutId = req.params.id;
	await Workouts.destroy({
		where: {
			id: workoutId,
		},
	});
	res.json("DELETE SUCCESSFULLY");
});
module.exports = router;
