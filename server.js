
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database");
}, (exception) =>{
    throw new Error(`unable to connect to database: ${config.mongoUri}, exception: ${exception}`);
});

app.get("/", (req, res) =>{
    res.json({
        message: "Welcome to the server."
    });
});

app.listen(config.port, (error) =>{
    if(error) {
        console.log(error);
    }
    console.info("Server started on port %s.", config.port);
})