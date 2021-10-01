"use strict";
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    },{
        tableName: "user-table",
        timestamps: true,
    });

    User.getTest = async () => {
         const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
         return jane;
    };

    global.Models.User = User;
}
