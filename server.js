const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./connection/dbConnection");
const cors = require("cors");


//const contactRoutes = require('./routes/contactRoutes');
connectDB();
const app = express();
app.use(express.json());

app.use(cors());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
// const port = process.env.PORT || 3000;

const port = 3000;
// // 2. Use the imported route
// app.use("/api/contacts", contactRoutes);
//const port = process.env.PORT || 3000;
app.listen(port, () =>{
        console.log(`server running in port ${port}`);
});