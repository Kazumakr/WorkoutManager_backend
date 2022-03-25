const express = require("express");
const router = express.Router();
const { Users, Days } = require("../models");

const bcrypt = require("bcrypt");

const { validateToken } = require("../middlewares/AuthMiddleware");
const config = require("../config/auth.config");
const { sign } = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
	const { username, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUser = {
		username: username,
		email: email,
		password: hashedPassword,
	};
	await Users.create(newUser);
	res.json("Success");
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await Users.findOne({
		where: { email: email },
		include: [Days],
	});
	if (!user) res.json({ error: "User doesn't exist!" });

	bcrypt.compare(password, user.password).then((match) => {
		if (!match) res.json({ error: "Wrong password" });
		const accessToken = sign(
			{ id: user.id, username: user.username, Days: user.Days },
			config.secret
		);
		res.json({
			token: accessToken,
			username: user.username,
			id: user.id,
			Days: user.Days,
		});
	});
});

router.get("/singleuser/:id", async (req, res) => {
	const id = req.params.id;
	const user = await Users.findByPk(id, {
		attributes: { exclude: ["password"] },
	});
	res.json(user);
});

router.put("/:id", validateToken, async (req, res) => {
	const updatedUser = req.body;
	await Users.update(updatedUser, {
		where: { id: req.params.id },
	});
	res.json(updatedUser);
});

router.put("/changepassword/:id", validateToken, async (req, res) => {
	const id = req.params.id;

	const { oldPassword, newPassword } = req.body;
	const user = await Users.findByPk(id);

	bcrypt.compare(oldPassword, user.password).then(async (match) => {
		if (!match) res.json({ error: "Wrong password" });

		bcrypt.hash(newPassword, 10).then((hash) => {
			Users.update({ password: hash }, { where: { id: id } });
			res.json("Success");
		});
	});
});

router.delete("/delete/:id", validateToken, async (req, res) => {
	const id = req.params.id;
	await Users.destroy({
		where: {
			id: id,
		},
	});
	res.json("DELETE SUCCESSFULLY");
});

router.get("/auth", validateToken, (req, res) => {
	res.json(req.user);
});

module.exports = router;
