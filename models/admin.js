"use strict";
module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    },{
        tableName: "admin-table",
        timestamps: true,
    });

    Admin.getTest =async () => {
        const jane = await Admin.create({ firstName: "JaneDo", lastName: "AneDo" });
        return jane;
    };

    global.Models.Admin = Admin;
}
