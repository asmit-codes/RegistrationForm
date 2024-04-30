const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://Asmitkumar123:<P6t90iYea5Qz9QUR>@cluster0.ukgkazx.mongodb.net/registrationform?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`\nConnected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};