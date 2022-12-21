import { Model, DataTypes } from "sequelize";
import sequelize, { BaseModel } from "../db";

class HellowWorld extends BaseModel{
    declare id: number;
    declare hit: number;
}

HellowWorld.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hit: DataTypes.INTEGER,
    
}, {sequelize})

export default HellowWorld