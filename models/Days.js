module.exports = (sequelize, DataTypes) => {
	const Days = sequelize.define("Days", {
		date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	});

	return Days;
};
