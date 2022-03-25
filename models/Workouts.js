module.exports = (sequelize, DataTypes) => {
	const Workouts = sequelize.define("Workouts", {
		area: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		parts: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		menu: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		unit: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	});
	return Workouts;
};
