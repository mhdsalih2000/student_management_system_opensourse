import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database";


module.exports = {
    up: ({context:{queryInterface}}) => {
      return queryInterface.createTable('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false,
        },
        password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        last_login_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        verification_token: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        verification_token_expires_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        password_reset_token: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        password_reset_expires_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        
        },
      );
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('User');
    },
  };