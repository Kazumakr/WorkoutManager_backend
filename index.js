const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const workoutsRouter = require("./routes/Workouts");
const usersRouter = require("./routes/Users");
const daysRouter = require("./routes/Days");
const scheduleRouter = require("./routes/Schedule");

const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
	optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));

const db = require("./models");

app.use("/workouts", workoutsRouter);
app.use("/auth", usersRouter);
app.use("/days", daysRouter);
app.use("/schedule", scheduleRouter);

db.sequelize.sync().then(() => {
	const port = process.env.PORT || 3001;
	app.listen(port, () => {
		console.log(`server is running on port ${port}`);
	});
});
