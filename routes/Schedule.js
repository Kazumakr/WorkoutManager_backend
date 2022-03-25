const express = require("express");
const router = express.Router();
const { Schedule } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
	const schedule = req.body;
	schedule.UserId = req.user.id;

	await Schedule.create(schedule);
	res.json("Success");
});

router.get("/", validateToken, async (req, res) => {
	const schedule = await Schedule.findOne({ where: { UserId: req.user.id } });
	res.json(schedule);
});

router.put("/", validateToken, async (req, res) => {
	const updatedSchedule = req.body;
	updatedSchedule.UserId = req.user.id;
	await Schedule.update(updatedSchedule, { where: { UserId: req.user.id } });
	res.json(updatedShedule);
});

module.exports = router;
