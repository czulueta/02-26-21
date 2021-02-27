const express = require("express")
const songRouter = express.Router()
const Song = require("../models/song.js")

// get all songs
songRouter.get("/", (req, res, next) => {
    Song.find((err, songs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(songs)
    })
})
// post a comment
songRouter.post("/", (req, res, next) => {
    const newComment = new Song(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})
module.exports = songRouter