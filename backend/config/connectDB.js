// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected!`);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// Use the following function in server.js to connect to mongoDB and start the server

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen("5000", () => {
//       console.log(`Server running on port: ${PORT}!`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();

// module.exports = connectDB;
