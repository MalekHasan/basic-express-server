module.exports=(req,res,next)=>{

    // req.body.name='fred'
    const {name}=req.query
    if (Number.parseInt(name))
    {
        console.log(Number.parseInt(name));
        next(`The ${typeof name} is Not Valid`);
    }
    else{
        next();
    }
    }
