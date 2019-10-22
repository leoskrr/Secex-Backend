module.exports = middleware => {
    return(req,res,next) =>
    {
        if(req.user.cargo === 'administrador' || req.user.cargo === 'admin'){
            middleware(req,res,next)
        } else {
            res.status(401).send("Acesso somente para administradores");
        }
    }
}