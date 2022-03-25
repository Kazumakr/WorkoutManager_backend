const express = require("express");
const router = express.Router();
const { Days } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/:id", validateToken, async (req, res) => {
	const modifiedDate = req.body.date + "T00:00:00.000Z";
	const date = req.body.date;
	const UserId = req.params.id;
	const found = await Days.findOne({
		where: { date: modifiedDate, UserId: UserId },
	});
	if (!found) {
		await Days.create({ date: date, UserId: UserId });
	}
	const allDays = await Days.findAll({
		where: { UserId: UserId },
	});
	res.json(allDays);
});

module.exports = router;
