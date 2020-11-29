const Post=require('../models/post')

module.exports.showPost = function (req,res) {
    Post.find()
        .then((posts)=>{
            res.json(posts)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.addPost=(req,res)=>{
    const body=req.body
    const post=new Post(body)
    post.save()
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        res.json(err)
    })
}