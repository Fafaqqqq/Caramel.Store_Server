const database = require('../db')
const {DataTypes} = require('sequelize')

const User = database.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, notNull: true},
    password: {type: DataTypes.STRING, notNull: true},
    name: {type: DataTypes.STRING,  notNull: true},
    surname: {type: DataTypes.STRING, notNull: true},
    telephone: {type: DataTypes.STRING, notNull: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Clothes = database.define('clothes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    price: {type: DataTypes.INTEGER},
    type: { type: DataTypes.STRING}
})


const Basket = database.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


const Liked = database.define('liked', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const SizeTable = database.define('size_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.SMALLINT, allowNull: true}
})

const BasketClothes = database.define('basket_clothes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const LikedClothes = database.define('basket_clothes', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
User.hasOne(Liked)

Basket.hasMany(Clothes)

Liked.hasMany(Clothes)

//Clothes.hasOne(Basket)
//Clothes.hasOne(Liked)

Clothes.hasMany(SizeTable)
SizeTable.hasOne(Clothes)

module.exports = {
    User,
    Basket,
    Liked,
    Clothes,
    BasketClothes,
    LikedClothes
}