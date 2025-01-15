require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://andreasantacruz123:6focCRIyPLx03BNq@moviecluster.4hzo1.mongodb.net/MoviesHW?retryWrites=true&w=majority&appName=MovieCluster"
  );
};
module.exports = {
  dbCon,
};
