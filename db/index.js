const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://AsmitkumarMDB:Asmitkumar@123@cluster0.ukgkazx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`\nConnected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};