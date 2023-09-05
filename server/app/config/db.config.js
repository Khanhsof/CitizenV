module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "21040709",
    DB: "citizenv",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
};