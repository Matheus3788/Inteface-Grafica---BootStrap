const Sequelize = require("sequelize")
const sequelize = new Sequelize ("exemplo_dsm", "root","",{
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}



