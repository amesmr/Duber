module.exports = function (sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {
        // sequelize does this by default
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: false
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        google_place_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        non_profit_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
            isIn: [
                ['admin', 'user']
            ]
        }
    },
    // // TODO // do we need to associate users and admins here? , // To create an
    // association between Admins and Users {     classMethods: {         associate:
    // function(models) {             //             Admins.hasMany(models.Users);
    //     }     } }
    );
    return Admin;
};