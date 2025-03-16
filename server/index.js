const express = require('express');
const app = express();

const port = process.env.PORT;

const contestRoutes = require("./routes/contest");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TLE CP Tracker!"
    });
});

app.get("/api", contestRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})