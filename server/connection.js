const mongoose = require("mongoose")
const url = process.env.MONGODB_URL
// console.log("connection ", url)

const connection = async () => {
    try {
        await mongoose.connect(url)
        console.log("Database connected successully.")

    } catch (error) {
        console.log(error)
        process.exit(1)

    }

}
module.exports = connection


