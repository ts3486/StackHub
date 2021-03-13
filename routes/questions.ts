export{}
const router = require("express").Router();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//Models
let Question = require("../models/question.model");


//POST
router.route("/post").post((req :any, res: any) => {

    // const username: String = req.body.username;
    const title: String = req.body.title;
    const content: String = req.body.content;
    // const availability: any = req.body.question;
    // const date = Date.parse(req.body.date);

    const newQuestion = new Question({
        // username,
        title,
        content,
        // availability,
        // date,
    });
    
    //save()  save to db
    newQuestion.save()
        .then((question: any) => res.json("Question added!"))
        .catch((err: any) => res.status(400).json("Error: " + err))
})

module.exports = router;

