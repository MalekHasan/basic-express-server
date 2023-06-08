module.exports=(req,res,next)=>{

    // req.query.name='fred'
    console.log(!Number.parseInt(req.query.name));
    if (req.query.name && !Number.parseInt(req.query.name))
    {   
        next();

    }
    else{
        console.log(Number.parseInt(req.query.name));
        next(`The ${req.query.name} is Not Valid`);
    }
    }
