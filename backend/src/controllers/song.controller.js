const songModel = require('../models/song.model');
const storageService = require('../services/storage.services');
const id3 = require('node-id3');

const uploadSong = async(req,res)=>{
    try{

        const songBuffer = req.file.buffer;
        const {mood} = req.body;
    
        const tags = id3.read(req.file.buffer);
        // console.log(req.file);
        // console.log(songBuffer);
        // console.log(tags);
    
    
        const songFile = await storageService.uploadFile({
            buffer:songBuffer,
            filename:req.file.originalname,
            folder:'/project/moodly/songs'
        })
    
        const song = await songModel.create({
            title:req.file.originalname,
            url:songFile.url,
            mood
        })
    
        res.status(201).json({
            message:"song created successfully",
            song
        })
    }catch(err){
        console.log(err);
    }
}

const getSong = async(req,res)=>{
    try{
    const{mood} = req.query

    const song = await songModel.findOne({
        mood
    })

    if(!song){
        return res.status(404).json({
            message:"Song not found"
        })
    }

    res.status(200).json({
        message:"Song fetched successfully",
        song,
    })
    }catch(err){
        return res.status(403).json({
            message:"Song not found try again later"
        })
    }
}

module.exports = {
    uploadSong,
    getSong
}