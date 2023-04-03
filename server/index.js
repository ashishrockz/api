require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
//const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
//
if (process . env.NODE_ENV === "production "){
    app.use(express. static (path . join ("frontend/build ")));
    app.get("*", (req, res) => {
        res.sendFile (path. resolve (_dirname, "frontend", "build", "index.html"));
    });
}
// routes

const contentsRouter = require("./router/contents");
app.use("/contents", contentsRouter);
//app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
