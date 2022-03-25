module.exports = (sequelize, DataTypes) => {
	const Schedule = sequelize.define("Schedule", {
		Sun: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Mon: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Tue: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Wed: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Thu: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Fri: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		Sat: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});

	return Schedule;
};
