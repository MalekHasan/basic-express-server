module.exports=(error,req,res,next)=>{
res.status(500).send({
    code:500,
    path:req.path,
    message:`There is an error: ${error.message || error}`,
})
}