const mongoose = require("mongoose");
exports.connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://infoasmitkumar:<hJ3Ug77ueJ63BGdg>@bharatdb.amjmiin.mongodb.net/?retryWrites=true&w=majority&appName=bharatdb"
    );
    console.log(`\nConnected to ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};