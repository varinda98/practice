const toKen = require('jsonwebtoken')


const tokenFuncton = async function(req,res,next){
    let tokenIsavailable = req.headers["x-auth-token"]
    if (!tokenIsavailable){
    res.send({result: "Token is not available"})}
    else{
    let decodedToken = toKen.verify(tokenIsavailable, "FunctionUp's lithium's secret key");
  if (!decodedToken)
    return res.send({ status: false, msg: "Token is invalid" });
    else next()

    }
}

module.exports.tokenFuncton = tokenFuncton