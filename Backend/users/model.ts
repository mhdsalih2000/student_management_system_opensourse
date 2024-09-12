import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface UserAttributes {
    id: string;
    email: string;
    password_hash: string;
    role: string;
    created_at?: Date;
    updated_at?: Date;
    last_login_at?: Date;
    is_active: boolean;
    is_verified: boolean;
    verification_token?: string;
    verification_token_expires_at?: Date;
    password_reset_token?: string;
    password_reset_expires_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'created_at' | 'updated_at' | 'last_login_at' | 'verification_token' | 'verification_token_expires_at' | 'password_reset_token' | 'password_reset_expires_at'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: string;
    public email!: string;
    public password_hash!: string;
    public role!: string;
    public created_at?: Date;
    public updated_at?: Date;
    public last_login_at?: Date;
    public is_active!: boolean;
    public is_verified!: boolean;
    public verification_token?: string;
    public verification_token_expires_at?: Date;
    public password_reset_token?: string;
    public password_reset_expires_at?: Date;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
    User.init({
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
    }, {
        sequelize,
        tableName: 'User',
        underscored: true,
        timestamps: false,
    });

    return User;
};



module.exports = { User }