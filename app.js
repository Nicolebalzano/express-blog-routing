import express from "express";
import postsRouter from "./routers/posts.js"
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/" , (req, res) => {
    res.json({
        data : "Benvenuti nelle Api del mio blog",
    })
})
app.use("/posts", postsRouter)

    app.listen(port, () => {
    console.log("server listening");
})