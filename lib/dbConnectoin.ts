import mongoose from "mongoose";
interface IConnection {
  isConnected?: number;
}
const conection: IConnection = {};
async function dbConnet() {
  if (conection.isConnected) {
    console.log("db Already Connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "NextAuth",
    });
    conection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
}

export {dbConnet}