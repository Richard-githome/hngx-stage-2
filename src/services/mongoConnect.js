const dotenv = require('dotenv').config();
const { connection, connect } = require('mongoose');

// Update below to match your own MongoDB connection string.
const MONGO_URL = process.env.MONGO_URL

connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

connection.on('error', (err) => {
  console.error(err);
});

const mongoConnect = async ()=>{
  await connect(process.env.MONGO_URL);

}

const mongoDisconnect = async()=>{
  setTimeout(async() => {await connection.close()}, 10000)
  ;
}


module.exports = {
  mongoConnect,
  mongoDisconnect
}