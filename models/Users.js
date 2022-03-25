module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		height: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	});

	Users.associate = (models) => {
		Users.hasMany(models.Days, {
			onDelete: "cascade",
		});
		Users.hasMany(models.Workouts, {
			onDelete: "cascade",
		});
		Users.hasOne(models.Schedule, {
			onDelete: "cascade",
		});
	};
	return Users;
};
