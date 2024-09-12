"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: ({ context: { queryInterface } }) => {
        return queryInterface.createTable('User', {
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
                primaryKey: true,
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                unique: true,
                allowNull: false,
            },
            password_hash: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: false,
            },
            role: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false,
            },
            created_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
            updated_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
            last_login_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
            is_active: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: true,
            },
            is_verified: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false,
            },
            verification_token: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            verification_token_expires_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
            password_reset_token: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            password_reset_expires_at: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('User');
    },
};
//# sourceMappingURL=create_user_table.js.map