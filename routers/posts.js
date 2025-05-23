import express from "express";
const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    res.json({
        data :"Lista di tutti i post",
    })
})

//SHOW
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.json({
        data :  `dettagli dei post con id  ${postId}`,
    })
})

//STORE crea un elemento
router.post("/", (req, res) => {
    res.json ({
        data: "aggiungo un nuovo post",
    })
})

//UPDATE
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.json({
        data: ` Modifico un singolo gioco con id ${postId} ` ,
    })
})

//DETSROY 
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json({
        data : `cancello il post con id ${postId}`
    })
})
export default router;